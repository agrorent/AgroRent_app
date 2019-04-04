import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TractoresComponent } from './tractores/tractores.component';
import { ApartadoComponent } from './apartado/apartado.component';
import { ApartadoEditComponent } from './apartado/apartado-edit/apartado-edit.component';
import { TractoresDetailComponent } from './tractores/tractores-detail/tractores-detail.component';
import { TractoresEditComponent } from './tractores/tractores-edit/tractores-edit.component';
import { TractoresListComponent } from './tractores/tractores-list/tractores-list.component';
import { TractoresStartComponent } from './tractores/tractores-start/tractores-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TractoresComponent,
    ApartadoComponent,
    ApartadoEditComponent,
    TractoresDetailComponent,
    TractoresEditComponent,
    TractoresListComponent,
    TractoresStartComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
