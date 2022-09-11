import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { AuthGuardService } from './guards/auth-guard.service';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }