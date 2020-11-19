import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { PrimeModule } from './prime.module';

import { MomentPipe } from 'src/app/_pipes';
import { NgxLoadingModule } from 'ngx-loading';

const modules = [
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  PrimeModule
]

@NgModule({
  declarations: [
    MomentPipe
  ],
  imports: [
    CommonModule,

    modules,
    NgxLoadingModule.forRoot({})
  ],
  exports: [
    CommonModule,

    modules,
    MomentPipe
  ]
})
export class CommonLocalModule { }
