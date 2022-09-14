import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoPesquisaComponent } from './curso-pesquisa/curso-pesquisa.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { LibSearchComponent } from './reactive-search/lib-search/lib-search.component';
import { UploadFileComponent } from './upload-file/upload-file/upload-file.component';

const routes: Routes = [
  { path: '', component: CursosListaComponent },
  {
    path: 'novo', component: CursosFormComponent,
    resolve: { curso: AuthGuardService }
  },
  {
    path: 'editar/:id', component: CursosFormComponent,
    resolve: { curso: AuthGuardService }
  },
  {
    path: 'upload', component: UploadFileComponent,
    resolve: { curso: AuthGuardService }
  },
  {
    path: 'busca', component: CursoPesquisaComponent,
    resolve:{curso: AuthGuardService}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
