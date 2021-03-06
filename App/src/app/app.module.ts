import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TractoresComponent } from './recipes/recipes.component';
import { TractorListComponent } from './recipes/recipe-list/recipe-list.component';
import { TractorDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { TractorItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ApartadoComponent } from './shopping-list/shopping-list.component';
import { ApartadoEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ApartadoListService } from './shopping-list/shopping-list.service';
import { AppRountingModule } from './app-routing.module';
import { TractorStartComponent } from './recipes/recipe-start/recipe-start.component';
import { TractorEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { TractorService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { HttpModule } from '@angular/http';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';
import { ArrendadorComponent } from './arrendador/arrendador.component';
import { ArrendadorDetailComponent } from './arrendador/arrendador-detail/arrendador-detail.component';
import { ArrendadorListComponent } from './arrendador/arrendador-list/arrendador-list.component';
import { ArrendadorItemComponent } from './arrendador/arrendador-list/arrendador-item/arrendador-item.component';
import { ArrendatarioComponent } from './arrendatario/arrendatario.component';
import { ArrendatarioEditComponent } from './arrendatario/arrendatario-edit/arrendatario-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PostsDisponibilidadComponent } from './posts-disponibilidad/posts-disponibilidad.component';
import { FilterDisponibilidadPipe } from './pipes/filter-disponibilidad.pipe';
import { PostsPrecioComponent } from './posts-precio/posts-precio.component';
import { FilterPrecioPipe } from './pipes/filter-precio.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TractoresComponent,
    TractorListComponent,
    TractorDetailComponent,
    TractorItemComponent,
    ApartadoComponent,
    ApartadoEditComponent,
    DropdownDirective,
    TractorStartComponent,
    TractorEditComponent,
    SignupComponent,
    SigninComponent,
    MessagesComponent,
    ArrendadorComponent,
    ArrendadorDetailComponent,
    ArrendadorListComponent,
    ArrendadorItemComponent,
    ArrendatarioComponent,
    ArrendatarioEditComponent,
    ProfileComponent,
    PostsComponent,
    FilterPipe,
    PostsDisponibilidadComponent,
    FilterDisponibilidadPipe,
    PostsPrecioComponent,
    FilterPrecioPipe
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase , 'agrorent'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [ApartadoListService, TractorService, DataStorageService, AuthService, AuthGuard, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
