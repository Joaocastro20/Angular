import { MeuFormModule } from './meu-form/meu-form.module';
import { MeuFormComponent } from './meu-form/meu-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CursosModule } from './cursos/cursos.module';
import { FirtComponentComponent } from './firt-component/firt-component.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';


@NgModule({
  declarations: [
    AppComponent,
    FirtComponentComponent,
    DataBindingComponent,
    InputPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormsModule,
    MeuFormModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
