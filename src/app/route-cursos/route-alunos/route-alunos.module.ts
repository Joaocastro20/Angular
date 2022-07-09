import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { RouteAlunosComponent } from "./route-alunos.component";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { RouteAlunosRoutingModule } from "./route-alunos.routing.module";

@NgModule({
    imports:[CommonModule,RouteAlunosRoutingModule],
    exports:[],
    declarations:[RouteAlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
    providers:[],
})
export class RouteAlunosModule{

}