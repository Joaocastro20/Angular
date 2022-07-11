import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './route-cursos/guards/auth.guard.service';
import { RouteCursoDetalhesComponent } from './route-cursos/route-curso-detalhes/route-curso-detalhes.component';
import { RouteCursoNaoEncontradoComponent } from './route-cursos/route-curso-nao-encontrado/route-curso-nao-encontrado.component';
import { RouteCursosComponent } from './route-cursos/route-cursos.component';
import { RouteHomeComponent } from './route-cursos/route-home/route-home.component';
import { RouteLoginComponent } from './route-cursos/route-login/route-login.component';

const routes: Routes = [
  {path: 'cursos', component: RouteCursosComponent,canActivate:[AuthGuardService]},
  {path: 'curso/:id', component:RouteCursoDetalhesComponent,canActivate:[AuthGuardService]},
  {path: 'login', component: RouteLoginComponent},
  {path:'', component: RouteLoginComponent ,canActivate:[AuthGuardService]},
  {path: 'naoEncontrado', component:RouteCursoNaoEncontradoComponent,canActivate:[AuthGuardService]}
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
