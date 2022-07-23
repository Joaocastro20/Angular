import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RouteCursoDetalhesComponent } from "../route-curso-detalhes/route-curso-detalhes.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { RouteAlunosComponent } from "./route-alunos.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AuthGuardService } from "../guards/auth.guard.service";


const alunosRoutes: Routes = [
    {path:'alunos',component: RouteAlunosComponent,canActivate:[AuthGuardService], children:[
        {path:'novo',component:AlunoFormComponent},
        {path:':id',component:AlunoDetalheComponent},
        {path:':id/editar',component:AlunoFormComponent}
    ]},
    
    
]

@NgModule({
    imports:[RouterModule.forChild(alunosRoutes)],
    exports:[RouterModule]
})
export class RouteAlunosRoutingModule{

}