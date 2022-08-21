import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFormularioComponent } from './data-formulario/data-formulario.component';
import { TemplateFormularioComponent } from './template-formulario/template-formulario.component';

const routes: Routes = [
  {path: 'templateForm', component: TemplateFormularioComponent},
  {path: 'dataForm', component: DataFormularioComponent},
  {path: '',pathMatch: 'full', redirectTo: 'dataForm'}
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes)
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
