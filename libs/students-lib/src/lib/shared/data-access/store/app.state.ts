/* istanbul ignore file */
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as studentGrades from './reducers/student-grades.reducer';
import * as studentList from './reducers/student-list.reducer';
import * as studentEnrollments from './reducers/student-enrollments.reducer';
import { Status, StudentEnrollmentModel, StudentGradeModel, StudentModel } from '../../models';
import { STUDENT_PORTAL } from '../../helpers/utils';


export interface State {
  studentList: Status<StudentModel>;
  studentGrades: Status<StudentGradeModel>;
  studentEnrollments: Status<StudentEnrollmentModel>;
}

export const reducers: ActionReducerMap<State> = {
  studentList: studentList.reducer,
  studentGrades: studentGrades.reducer,
  studentEnrollments: studentEnrollments.reducer,
};

export const selectUserModuleState = createFeatureSelector<State>(STUDENT_PORTAL);

export const getStudentList = createSelector(selectUserModuleState, (state: State) => {
  return state.studentList;
});

export const getStudentGrades = createSelector(selectUserModuleState, (state: State) => {
  return state.studentGrades;
});

export const getStudentEnrollments = createSelector(selectUserModuleState, (state: State) => {
  return state.studentEnrollments;
});
