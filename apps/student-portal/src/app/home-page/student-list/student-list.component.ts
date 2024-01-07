import { Component } from '@angular/core';
import { StudentsFacadeService } from '@angular-monorepo/students-lib';
import { Status, StudentModel } from '@angular-monorepo/students-lib';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

const studentList: Array<StudentModel> = [];
@Component({
  selector: 'angular-monorepo-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss',
})
export class StudentListComponent {
  dataSource = new MatTableDataSource(studentList);
  displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'dateOfBirth'
  ]
  constructor(
    public studentsFacadeService: StudentsFacadeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentsFacadeService
      .getStudentList()
      .subscribe((res: Status<StudentModel>) => {
        this.dataSource = new MatTableDataSource(res.result);
        this.studentsFacadeService.loadingStudents$.next(false);
      });
  }

  navigateToStudentEnrollments(data: StudentModel): void {
    //this.router.navigate(['/student-enrollments', data.id]);
    this.router.navigate(['/student-enrollments'], {
      queryParams: { studentId: data.id },
    });
  }
}
