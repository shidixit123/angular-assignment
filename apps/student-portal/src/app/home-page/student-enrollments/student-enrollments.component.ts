import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import {
  Status,
  StudentEnrollmentModel,
  StudentsFacadeService,
} from '@angular-monorepo/students-lib';

const studentEnrollment: Array<StudentEnrollmentModel> = [];
@Component({
  selector: 'angular-monorepo-student-enrollments',
  templateUrl: './student-enrollments.component.html',
  styleUrl: './student-enrollments.component.scss',
})
export class StudentEnrollmentsComponent {
  dataSource = new MatTableDataSource(studentEnrollment);
  displayedColumns: string[] = [
    'id',
    'studentId',
    'collegeName',
    'enrollmentStartDate',
    'enrollmentEndDate',
  ];
  constructor(
    public studentsFacadeService: StudentsFacadeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter((params: any) => params.studentId))
      .subscribe((params: any) => {
        console.log(params);
        this.studentsFacadeService
          .getStudentEnrollments()
          .subscribe((res: Status<StudentEnrollmentModel>) => {
            let result = res.result.filter((x) => x.id == params.studentId);
            this.studentsFacadeService.loadingStudentEnrollments$.next(false);
            this.dataSource = new MatTableDataSource(result);
          });
      });
  }

  navigateToStudentGrades(data: StudentEnrollmentModel): void {
    this.router.navigate(['/student-grades'], {
      queryParams: { enrollmentId: data.id },
    });
  }
}
