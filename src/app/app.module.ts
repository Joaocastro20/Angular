import { MeuFormModule } from './meu-form/meu-form.module';
import { MeuFormComponent } from './meu-form/meu-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';

import { CursosModule } from './cursos/cursos.module';
import { FirtComponentComponent } from './firt-component/firt-component.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { DiretivaNgContentComponent } from './diretiva-ng-content/diretiva-ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { CserviceComponent } from './cservice/cservice.component';
import { cService } from './cservice/cservice.service';
import { CriarAlgoServiceComponent } from './criar-algo-service/criar-algo-service.component';
import { LogService } from './shared/log.service';
import { PipesComponent } from './pipes/pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';
import { RouteHomeComponent } from './route-home/route-home.component';
import { RouteLoginComponent } from './route-login/route-login.component';
import { RouteCursosComponent } from './route-cursos/route-cursos.component';
import { RouteCursoDetalhesComponent } from './route-curso-detalhes/route-curso-detalhes.component';
import { RouteCursosService } from './route-cursos/route-cursos.service';
import { RouteCursoNaoEncontradoComponent } from './route-curso-nao-encontrado/route-curso-nao-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    FirtComponentComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    DiretivaNgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    CserviceComponent,
    CriarAlgoServiceComponent,
    PipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe,
    RouteHomeComponent,
    RouteLoginComponent,
    RouteCursosComponent,
    RouteCursoDetalhesComponent,
    RouteCursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormsModule,
    MeuFormModule,
    AppRoutingModule
    //routing
    
  ],
  providers: [cService,LogService,RouteCursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
