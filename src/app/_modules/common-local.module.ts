import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { PrimeModule } from './prime.module';

const modules = [
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  PrimeModule
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,

    modules
  ],
  exports: [
    CommonModule,

    modules
  ]
})
export class CommonLocalModule { }
