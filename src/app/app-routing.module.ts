import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'personajes', loadChildren: () => import('./_components/public/personajes/personajes.module').then(m => m.PersonajesModule) },
  { path: 'personaje/:id_per', loadChildren: () => import('./_components/public/personaje/personaje.module').then(m => m.PersonajeModule) },
  { path: 'planetas', loadChildren: () => import('./_components/public/planetas/planetas.module').then(m => m.PlanetasModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
