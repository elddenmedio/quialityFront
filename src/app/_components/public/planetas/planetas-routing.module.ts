import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetasComponent } from './planetas.component';

const routes: Routes = [{ path: '', component: PlanetasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetasRoutingModule { }
