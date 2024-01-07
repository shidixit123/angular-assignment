/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, filter } from 'rxjs';

import {
  Status,
  StudentEnrollmentModel,
  StudentGradeModel,
  StudentModel,
} from '../../models';
import * as fromRoot from '../store/app.state';
import * as StudentListAction from '../store/actions/student-list.action';
import * as StudentEnrollmentsAction from '../store/actions/student-enrollments.action';
import * as StudentGradesAction from '../store/actions/student-grades.action';

@Injectable({ providedIn: 'root' })
export class StudentsFacadeService {
  constructor(private store: Store<fromRoot.State>) {}

  loadingStudents$ = new BehaviorSubject<boolean>(false);
  loadingStudentEnrollments$ = new BehaviorSubject<boolean>(false);
  loadingStudentGrades$ = new BehaviorSubject<boolean>(false);

  /**
   * @description get Student List from store
   */
  getStudentList(): Observable<Status<StudentModel>> {
    this.loadingStudents$.next(true);
    return this.store.select(fromRoot.getStudentList);
  }

  /**
   * @description get Student Enrollments from store
   */
  getStudentEnrollments(
  ): Observable<Status<StudentEnrollmentModel>> {
    this.loadingStudentEnrollments$.next(true);
    return this.store
      .select(fromRoot.getStudentEnrollments);
  }

  /**
   * @description get Student Grades from store
   */
  getStudentGrades(
  ): Observable<Status<StudentGradeModel>> {
    this.loadingStudentGrades$.next(true);
    return this.store.select(fromRoot.getStudentGrades);
  }

  /**
   * @description load Student List from api
   */
  loadStudentList(): void {
    this.loadingStudents$.next(true);
    this.store.dispatch(StudentListAction.loadStudentRecordsRequest());
  }

  /**
   * @description load Student List from api
   */
  loadEnrollmentList(): void {
    this.loadingStudentEnrollments$.next(true);
    this.store.dispatch(
      StudentEnrollmentsAction.loadStudentEnrollmentRequest()
    );
  }

  /**
   * @description load Student List from api
   */
  loadGradeList(): void {
    this.loadingStudentGrades$.next(true);
    this.store.dispatch(StudentGradesAction.loadStudentGradesRequest());
  }
}
