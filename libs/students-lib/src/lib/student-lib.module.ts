import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialsModule } from './shared/module/materials/materials.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  imports: [CommonModule, MaterialsModule, SharedModule],
  exports: [FormsModule, ReactiveFormsModule, HeaderComponent],
  declarations: [HeaderComponent],
  providers: [],
})
export class StudentLibModule {}
