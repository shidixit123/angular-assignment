import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StudentGradesComponent } from './student-grades/student-grades.component';
import { StudentEnrollmentsComponent } from './student-enrollments/student-enrollments.component';
import { HomePageRoutingModule } from './home-page.routing';
import { StudentListComponent } from './student-list/student-list.component';
import { MaterialsModule, StudentLibModule } from '@angular-monorepo/students-lib';

@NgModule({
  declarations: [StudentGradesComponent,StudentEnrollmentsComponent, StudentListComponent],
  imports: [CommonModule, HomePageRoutingModule,MaterialsModule, StudentLibModule],
})
export class HomePageModule {}
