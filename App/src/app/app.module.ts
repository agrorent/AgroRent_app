import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ApartadoListService, TractorService, DataStorageService, AuthService, AuthGuard, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
