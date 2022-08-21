import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormularioComponent } from './template-formulario/template-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDebugComponent } from './shared/form-debug/form-debug.component';
import { HttpClientModule } from '@angular/common/http';
import { DataFormularioModule } from './data-formulario/data-formulario.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataFormularioModule,
    SharedModule
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
