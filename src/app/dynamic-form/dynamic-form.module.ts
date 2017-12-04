import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSelectModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatButtonModule,
} from '@angular/material';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { ExampleFormComponent } from './example-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    /* Material */
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule,
  ],
  exports: [DynamicFormComponent, DynamicFormQuestionComponent, ExampleFormComponent],
  declarations: [DynamicFormComponent, DynamicFormQuestionComponent, ExampleFormComponent],
})
export class DynamicFormModule {}
