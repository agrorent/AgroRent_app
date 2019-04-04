import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TractoresComponent } from './tractores/tractores.component';
import { ApartadoComponent } from './apartado/apartado.component';
import { TractoresStartComponent } from './tractores/tractores-start/tractores-start.component';
import { TractoresDetailComponent } from './tractores/tractores-detail/tractores-detail.component';
import { TractoresEditComponent } from './tractores/tractores-edit/tractores-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/tractores', pathMatch: 'full' },
  { path: 'tractores', component: TractoresComponent, children: [
    { path: '', component: TractoresStartComponent },
    { path: 'new', component: TractoresEditComponent},
    { path: ':id', component: TractoresDetailComponent },
    { path: ':id/edit', component: TractoresEditComponent}
  ] },
  { path: 'apartado', component: ApartadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRountingModule {

}
