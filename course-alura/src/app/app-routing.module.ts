import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPostagemComponent } from './componentes/postagens/criar-postagem/criar-postagem.component';
import { ListarPostagemComponent } from './componentes/postagens/listar-postagem/listar-postagem.component';

const routes: Routes = [
  {
    path:'',component:ListarPostagemComponent
  },
  {
    path:'novoPost', component:CriarPostagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
