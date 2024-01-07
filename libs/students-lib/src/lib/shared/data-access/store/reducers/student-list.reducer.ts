import { Action, createReducer, on } from '@ngrx/store';

import { Status, StudentModel } from '../../../models';
import * as StudentListAction from '../actions/student-list.action';

export const INIT_STATE: Status<StudentModel> = {
  // eslint-disable-next-line no-null/no-null
  error: null,
  result: [],
};

const studentListReducer = createReducer(
  INIT_STATE,
  on(StudentListAction.loadStudentRecordsSuccess, (state: any, { payload }: any) => ({ ...payload })),
  on(StudentListAction.loadStudentRecordsFailure, (state: any, { payload }: any) => ({ ...payload })),
);

export function reducer(state: Status<StudentModel> | undefined, action: Action): any {
  return studentListReducer(state, action);
}
