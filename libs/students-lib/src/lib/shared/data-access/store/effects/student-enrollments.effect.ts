import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';

import { Status, StudentEnrollmentModel } from '../../../models';
import { SnackbarService } from '../../services/snackbar.service/snackbar.service';
import * as StudentEnrollmentAction from '../actions/student-enrollments.action';
import { StudentsDetailsService } from '../../services/students-details.service.';
import * as utils from '../../../helpers/utils';
import { StudentsFacadeService } from '../../facade/students-facade.service';

@Injectable()
export class StudentEnrollmentsEffect {
  constructor(
    private actions$: Actions,
    private snackBar: SnackbarService,
    private studentsDetailsService: StudentsDetailsService,
    private studentsFacadeService: StudentsFacadeService,
  ) {}

  loadStudentEnrollements$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentEnrollmentAction.loadStudentEnrollmentRequest),
      debounceTime(30),
      switchMap(() =>
        this.studentsDetailsService.getStudentEnrollments().pipe(
          map((students: StudentEnrollmentModel[]) => {
            this.studentsFacadeService.loadingStudentEnrollments$.next(false);
            if(students && students.length > 0) {
            this.snackBar.showSuccessMessage(utils.STUDENT_ENROLLMENTS_LOADED_SUCCESSFULLY);
            return StudentEnrollmentAction.loadStudentEnrollmentSuccess({ payload:  {
              error: null,
              result: students,
            } });
          } else {
            this.snackBar.showFailureMessage(utils.NO_STUDENT_ENROLLMENTS_FOUND);
            return StudentEnrollmentAction.loadStudentEnrollmentFailure({ payload:  {
              error: utils.NO_STUDENT_ENROLLMENTS_FOUND,
              result: [],
            } });
           
            }
          }),
          catchError((error: any) => {
            this.studentsFacadeService.loadingStudentEnrollments$.next(false);
            
            //this.snackBar.showFailureMessage(error.message);
            return of(
              StudentEnrollmentAction.loadStudentEnrollmentFailure({
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
