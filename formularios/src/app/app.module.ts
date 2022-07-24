import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormularioComponent } from './template-formulario/template-formulario.component';
import { DataFormularioComponent } from './data-formulario/data-formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormularioComponent,
    DataFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
