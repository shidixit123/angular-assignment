import { createAction, props } from '@ngrx/store';

import * as utils from '../../../helpers/utils';
import { Status, StudentEnrollmentModel, StudentModel } from '../../../models';

export const loadStudentEnrollmentRequest = createAction(
  utils.LOAD_STUDENT_ENROLLMENTS_REQUEST,
);

export const loadStudentEnrollmentSuccess = createAction(utils.LOAD_STUDENT_ENROLLMENTS_SUCCESS, props<{ payload: Status<StudentEnrollmentModel> }>());

export const loadStudentEnrollmentFailure = createAction(utils.LOAD_STUDENT_ENROLLMENTS_FAILURE, props<{ payload: any }>());
