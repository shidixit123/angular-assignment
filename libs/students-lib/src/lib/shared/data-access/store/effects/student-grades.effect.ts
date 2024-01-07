import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';

import { Status, StudentGradeModel } from '../../../models';
import { SnackbarService } from '../../services/snackbar.service/snackbar.service';
import * as StudentGradeAction from '../actions/student-grades.action';
import { StudentsDetailsService } from '../../services/students-details.service.';
import * as utils from '../../../helpers/utils';
import { StudentsFacadeService } from '../../facade/students-facade.service';

@Injectable()
export class StudentGradesEffect {
  constructor(
    private actions$: Actions,
    private snackBar: SnackbarService,
    private studentsDetailsService: StudentsDetailsService,
    private studentsFacadeService: StudentsFacadeService,
  ) {}

  loadStudentGrades$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentGradeAction.loadStudentGradesRequest),
      debounceTime(30),
      switchMap(() =>
        this.studentsDetailsService.getStudentGrades().pipe(
          map((students: StudentGradeModel[]) => {
            this.studentsFacadeService.loadingStudentGrades$.next(false);
            if(students && students.length > 0) {
            this.snackBar.showSuccessMessage(utils.STUDENT_ENROLLMENTS_LOADED_SUCCESSFULLY);
            return StudentGradeAction.loadStudentGradesSuccess({ payload:  {
              error: null,
              result: students,
            } });
          } else {
            this.snackBar.showFailureMessage(utils.NO_STUDENT_ENROLLMENTS_FOUND);
            return StudentGradeAction.loadStudentGradesFailure({ payload:  {
              error: utils.NO_STUDENT_ENROLLMENTS_FOUND,
              result: [],
            } });
           
            }
          }),
          catchError((error: any) => {
            this.studentsFacadeService.loadingStudentGrades$.next(false);
            
            //this.snackBar.showFailureMessage(error.message);
            return of(
              StudentGradeAction.loadStudentGradesFailure({
                payload: {
                  error,
                  result: [],
                },
              }),
            );
          }),
        ),
      ),
    ),
  );
}
