import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../../_modules/material.module';
import { PrimeModule } from '../../_modules/prime.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,

    PrimeModule,
    MaterialModule
  ],
  exports: [
    MenuComponent
  ]
})
export class GeneralsModule { }
