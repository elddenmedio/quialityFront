import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../../_modules/material.module';
import { PrimeModule } from '../../_modules/prime.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,

    PrimeModule,
    MaterialModule
  ],
  exports: [
    MenuComponent,
    PageNotFoundComponent
  ]
})
export class GeneralsModule { }
