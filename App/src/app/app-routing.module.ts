import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TractoresComponent } from './recipes/recipes.component';
import { ApartadoComponent } from './shopping-list/shopping-list.component';
import { TractorStartComponent } from './recipes/recipe-start/recipe-start.component';
import { TractorDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { TractorEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent} from './auth/signup/signup.component';
import { SigninComponent} from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';
import { ArrendadorComponent } from './arrendador/arrendador.component';
import { ArrendadorDetailComponent } from './arrendador/arrendador-detail/arrendador-detail.component';
import { ArrendatarioComponent } from './arrendatario/arrendatario.component';
import { ArrendatarioEditComponent } from './arrendatario/arrendatario-edit/arrendatario-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'tractores', component: TractoresComponent, canActivate: [AuthGuard], children: [
    { path: '', component: TractorStartComponent },
    { path: 'new', component: TractorEditComponent},
    { path: ':id', component: TractorDetailComponent },
    { path: ':id/edit', component: TractorEditComponent }
  ] },
  { path: 'arrendador', component: ArrendadorComponent, canActivate: [AuthGuard], children: [
      { path: ':id', component: ArrendadorDetailComponent }
    ] },
  { path: 'apartado', component: ApartadoComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'arrendador', component: ArrendadorComponent },
  { path: 'arrendatario', component: ArrendatarioComponent, children: [
      {path: 'new', component: ArrendatarioEditComponent}
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRountingModule {

}
