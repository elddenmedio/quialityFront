import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import { MaterialModule } from 'src/app/_modules/material.module';
import { CommonLocalModule } from 'src/app/_modules/common-local.module';

import { PersonajesService } from 'src/app/_services';

@NgModule({
  declarations: [
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,

    CommonLocalModule
  ],
  providers: [
    PersonajesService
  ]
})
export class PersonajesModule { }
