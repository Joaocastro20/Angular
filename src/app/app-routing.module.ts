import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteCursoDetalhesComponent } from './route-curso-detalhes/route-curso-detalhes.component';
import { RouteCursosComponent } from './route-cursos/route-cursos.component';
import { RouteHomeComponent } from './route-home/route-home.component';
import { RouteLoginComponent } from './route-login/route-login.component';

const routes: Routes = [
  {path: 'cursos', component: RouteCursosComponent},
  {path: 'curso/:id', component:RouteCursoDetalhesComponent},
  {path: 'login', component: RouteLoginComponent},
  {path:'', component: RouteHomeComponent }
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
