import { createAction, props } from '@ngrx/store';

import * as utils from '../../../helpers/utils';
import { Status, StudentGradeModel } from '../../../models';

export const loadStudentGradesRequest = createAction(
  utils.LOAD_STUDENT_GRADES_REQUEST,
);

export const loadStudentGradesSuccess = createAction(utils.LOAD_STUDENT_GRADES_SUCCESS, props<{ payload: Status<StudentGradeModel> }>());

export const loadStudentGradesFailure = createAction(utils.LOAD_STUDENT_GRADES_FAILURE, props<{ payload: any }>());
