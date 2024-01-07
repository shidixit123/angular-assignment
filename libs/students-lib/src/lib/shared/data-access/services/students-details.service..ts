/* eslint-disable no-null/no-null */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { students } from '../../helpers/Data/students';
import {
  StudentEnrollmentModel,
  StudentGradeModel,
  StudentModel,
} from '../../models';
import { enrollments } from '../../helpers/Data/studentEnrollments';
import { grades } from '../../helpers/Data/studentGrades';

@Injectable()
export class StudentsDetailsService {
  constructor(private http: HttpClient) {}

  /**
   * @description get student list
   */
  getStudentList(): Observable<StudentModel[]> {
    // this.http.get<any>('http://localhost:8000/api/Student').subscribe((e) => {
    // });
    return of(students).pipe(delay(2000));
  }

  /**
   * @description get student enrollments
   */
  getStudentEnrollments(): Observable<StudentEnrollmentModel[]> {
    // return this.http.get<StudentEnrollmentModel[]>(
    //   'http://localhost:8000/api/StudentEnrollment',
    //   { responseType: 'json' }
    // );
    return of(enrollments).pipe(delay(2000));
  }

  /**
   * @description get student grades
   */
  getStudentGrades(): Observable<StudentGradeModel[]> {
    // return this.http.get<StudentGradeModel[]>(
    //   'http://localhost:8000/api/StudentGrade',
    //   { responseType: 'json' }
    // );
    return of(grades).pipe(delay(2000));
  }
}
