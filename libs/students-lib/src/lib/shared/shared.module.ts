import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { reducers } from './data-access/store/app.state';
import { StudentGradesEffect } from './data-access/store/effects/student-grades.effect';
import { StudentEnrollmentsEffect } from './data-access/store/effects/student-enrollments.effect';
import { StudentListEffect } from './data-access/store/effects/student-list.effect';
import { STUDENT_PORTAL } from './helpers/utils';
import { MaterialsModule } from './module/materials/materials.module';
import { StudentsDetailsService } from './data-access/services/students-details.service.';
import { AuthInterceptor } from './data-access/interceptors/auth.interceptor';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(STUDENT_PORTAL, reducers),
    EffectsModule.forFeature([StudentGradesEffect, StudentEnrollmentsEffect, StudentListEffect]),
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    StudentsDetailsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  exports: [],
})
export class SharedModule {}
