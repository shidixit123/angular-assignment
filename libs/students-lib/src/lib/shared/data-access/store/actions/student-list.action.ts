import { createAction, props } from '@ngrx/store';

import * as utils from '../../../helpers/utils';
import { Status, StudentModel } from '../../../models';

export const loadStudentRecordsRequest = createAction(
  utils.LOAD_STUDENT_RECORDS_REQUEST,
);

export const loadStudentRecordsSuccess = createAction(utils.LOAD_STUDENT_RECORDS_SUCCESS, props<{ payload: Status<StudentModel> }>());

export const loadStudentRecordsFailure = createAction(utils.LOAD_STUDENT_RECORDS_FAILURE, props<{ payload: any }>());
