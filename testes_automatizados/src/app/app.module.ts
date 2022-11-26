import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';
import { JqueryTestesComponent } from './shared/components/jquery-testes/jquery-testes.component';

@NgModule({
  declarations: [
    AppComponent,
    JqueryTestesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LikeWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
