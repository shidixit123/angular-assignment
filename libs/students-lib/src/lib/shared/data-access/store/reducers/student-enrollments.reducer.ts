import { Action, createReducer, on } from '@ngrx/store';

import { Status, StudentEnrollmentModel, StudentModel } from '../../../models';
import * as StudentEnrollmentAction from '../actions/student-enrollments.action';

export const INIT_STATE: Status<StudentEnrollmentModel> = {
  // eslint-disable-next-line no-null/no-null
  error: null,
  result: [],
};

const studentEnrollmentReducer = createReducer(
  INIT_STATE,
  on(StudentEnrollmentAction.loadStudentEnrollmentSuccess, (state: any, { payload }: any) => ({ ...payload })),
  on(StudentEnrollmentAction.loadStudentEnrollmentFailure, (state: any, { payload }: any) => ({ ...payload })),
);

export function reducer(state: Status<StudentEnrollmentModel> | undefined, action: Action): any {
  return studentEnrollmentReducer(state, action);
}
