import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { RouteAlunosComponent } from "./route-alunos.component";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { RouteAlunosRoutingModule } from "./route-alunos.routing.module";
import { RouteAlunosService } from "./route-alunos.service";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports:[CommonModule,RouteAlunosRoutingModule,FormsModule],
    exports:[],
    declarations:[RouteAlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
    providers:[RouteAlunosService],
})
export class RouteAlunosModule{

}