import { StudentsFacadeService } from '@angular-monorepo/students-lib';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-monorepo-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  constructor(public studentsFacadeService: StudentsFacadeService,
  ) {}

  ngOnInit(): void {
    this.studentsFacadeService.loadStudentList();
    this.studentsFacadeService.loadGradeList();
    this.studentsFacadeService.loadEnrollmentList();
  }
}
