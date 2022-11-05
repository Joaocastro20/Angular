import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPostagemComponent } from './componentes/postagens/criar-postagem/criar-postagem.component';
import { ListarPostagemComponent } from './componentes/postagens/listar-postagem/listar-postagem.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirPostagemComponent } from './componentes/postagens/excluir-postagem/excluir-postagem.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPostagemComponent,
    ListarPostagemComponent,
    ExcluirPostagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
