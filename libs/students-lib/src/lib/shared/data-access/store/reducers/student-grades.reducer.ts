import { Action, createReducer, on } from '@ngrx/store';

import { Status, StudentGradeModel, StudentModel } from '../../../models';
import * as StudentGradeAction from '../actions/student-grades.action';

export const INIT_STATE: Status<StudentGradeModel> = {
  // eslint-disable-next-line no-null/no-null
  error: null,
  result: [],
};

const studentEnrollmentReducer = createReducer(
  INIT_STATE,
  on(StudentGradeAction.loadStudentGradesSuccess, (state: any, { payload }: any) => ({ ...payload })),
  on(StudentGradeAction.loadStudentGradesFailure, (state: any, { payload }: any) => ({ ...payload })),
);

export function reducer(state: Status<StudentGradeModel> | undefined, action: Action): any {
  return studentEnrollmentReducer(state, action);
}
