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
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: TractoresComponent, children: [
    { path: '', component: TractorStartComponent },
    { path: 'new', component: TractorEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: TractorDetailComponent },
    { path: ':id/edit', component: TractorEditComponent, canActivate: [AuthGuard] }
  ] },
  { path: 'shopping-list', component: ApartadoComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRountingModule {

}
