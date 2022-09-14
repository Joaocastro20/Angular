import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { AlertModelComponent } from './shared/alert-model/alert-model.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursoPesquisaComponent } from './curso-pesquisa/curso-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosListaComponent,
    AlertModelComponent,
    CursosFormComponent,
    CursoPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
