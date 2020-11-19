import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetasRoutingModule } from './planetas-routing.module';
import { PlanetasComponent } from './planetas.component';
import { PersonajesService } from 'src/app/_services';
import { CommonLocalModule } from 'src/app/_modules/common-local.module';
import { ResidentesComponent } from './residentes/residentes.component';

@NgModule({
  declarations: [
    PlanetasComponent,
    ResidentesComponent
  ],
  imports: [
    CommonModule,
    PlanetasRoutingModule,

    CommonLocalModule
  ],
  providers: [
    PersonajesService
  ]
})
export class PlanetasModule { }
