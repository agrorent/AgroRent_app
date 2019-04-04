import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TractoresComponent } from './tractores/tractores.component';
import { TractoresListComponent } from './tractores/tractores-list/tractores-list.component';
import { TractoresDetailComponent } from './tractores/tractores-detail/tractores-detail.component';
import { TractoresItemComponent } from './tractores/tractores-list/tractores-item/tractores-item.component';
import { ApartadoComponent } from './apartado/apartado.component';
import { ApartadoEditComponent } from './apartado/apartado-edit/apartado-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ApartadoService } from './apartado/apartado.service';
import { AppRountingModule } from './app-routing.module';
import { TractoresStartComponent } from './tractores/tractores-start/tractores-start.component';
import { TractoresEditComponent } from './tractores/tractores-edit/tractores-edit.component';
import { TractoresService } from './tractores/tractores.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TractoresComponent,
    TractoresListComponent,
    TractoresDetailComponent,
    TractoresItemComponent,
    ApartadoComponent,
    ApartadoEditComponent,
    DropdownDirective,
    TractoresStartComponent,
    TractoresService
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApartadoService, TractoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
