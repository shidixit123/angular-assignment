import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';

import { Status, StudentModel } from '../../../models';
import { SnackbarService } from '../../services/snackbar.service/snackbar.service';
import * as StudentListAction from '../actions/student-list.action';
import { StudentsDetailsService } from '../../services/students-details.service.';
import * as utils from '../../../helpers/utils';
import { StudentsFacadeService } from '../../facade/students-facade.service';

@Injectable()
export class StudentListEffect {
  constructor(
    private actions$: Actions,
    private snackBar: SnackbarService,
    private studentsDetailsService: StudentsDetailsService,
    private studentsFacadeService: StudentsFacadeService,
  ) {}

  loadStudentList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentListAction.loadStudentRecordsRequest),
      debounceTime(30),
      switchMap(() =>
        this.studentsDetailsService.getStudentList().pipe(
          map((students: StudentModel[]) => {
            this.studentsFacadeService.loadingStudents$.next(false);
            if(students && students.length > 0) { 
              this.snackBar.showSuccessMessage(utils.STUDENT_RECORDS_LOADED_SUCCESSFULLY);
            return StudentListAction.loadStudentRecordsSuccess({ payload:  {
              error: null,
              result: students,
            } });
          } else {
            this.snackBar.showFailureMessage(utils.NO_STUDENT_RECORDS_FOUND);
            return StudentListAction.loadStudentRecordsFailure({ payload:  {
              error: utils.NO_STUDENT_RECORDS_FOUND,
              result: [],
            } });
           
            }
          }),
          catchError((error: any) => {
            this.studentsFacadeService.loadingStudents$.next(false);
            this.snackBar.showFailureMessage(error.message);
            return of(
              StudentListAction.loadStudentRecordsFailure({
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
