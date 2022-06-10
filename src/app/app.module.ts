import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CursosModule } from './cursos/cursos.module';
import { FirtComponentComponent } from './firt-component/firt-component.component';


@NgModule({
  declarations: [
    AppComponent,
    FirtComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
