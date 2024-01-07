import { Component } from '@angular/core';
import { Status, StudentGradeModel, StudentsFacadeService } from '@angular-monorepo/students-lib';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

const studentGrades: Array<StudentGradeModel> = [];
@Component({
  selector: 'angular-monorepo-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrl: './student-grades.component.scss',
})
export class StudentGradesComponent {
  dataSource = new MatTableDataSource(studentGrades);
  displayedColumns: string[] = ['id',
    'studentEnrollmentId',
    'grade'];
  constructor(public studentsFacadeService: StudentsFacadeService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter((params: any) => params.enrollmentId))
      .subscribe((params: any) => {
        console.log(params);
        this.studentsFacadeService.getStudentGrades().subscribe((res: Status<StudentGradeModel>) => {
          this.studentsFacadeService.loadingStudentGrades$.next(false);
          debugger;
          let result = res.result.filter(x => x.studentEnrollmentId == params.enrollmentId);
          this.dataSource = new MatTableDataSource(result);
      }
    );
    
   });
 }
}
