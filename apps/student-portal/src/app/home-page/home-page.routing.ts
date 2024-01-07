import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AuthGuard } from '../guards/auth.guards';
import { StudentEnrollmentsComponent } from './student-enrollments/student-enrollments.component';
import { StudentGradesComponent } from './student-grades/student-grades.component';

export const routes: Routes = [
    { path: '', redirectTo: 'student-list', pathMatch: 'full'},
    { path: 'student-list', component: StudentListComponent, canActivate: [AuthGuard] },
    { path: 'student-enrollments', component: StudentEnrollmentsComponent, canActivate: [AuthGuard] },
    { path: 'student-grades', component: StudentGradesComponent, canActivate: [AuthGuard] }
  ];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
