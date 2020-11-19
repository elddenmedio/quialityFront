import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajeRoutingModule } from './personaje-routing.module';
import { PersonajeComponent } from './personaje.component';
import { CommonLocalModule } from 'src/app/_modules/common-local.module';
import { PersonajesService } from 'src/app/_services';

@NgModule({
  declarations: [
    PersonajeComponent
  ],
  imports: [
    CommonModule,
    PersonajeRoutingModule,

    CommonLocalModule
  ],
  providers: [
    PersonajesService
  ]
})
export class PersonajeModule { }
