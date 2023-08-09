import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';
import { JqueryTestesComponent } from './shared/components/jquery-testes/jquery-testes.component';
import { MonkeyTypeComponent } from './shared/components/monkey-type/monkey-type.component';
import { TesteComponent } from './components/teste/teste.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { OperadorFromComponent } from './components/operador-from/operador-from.component';
import { OperadorOfComponent } from './components/operador-of/operador-of.component';
import { OperadorFromEventComponent } from './components/operador-from-event/operador-from-event.component';
import { OperadorIntervalComponent } from './components/operador-interval/operador-interval.component';
import { OperadorTimeComponent } from './components/operador-time/operador-time.component';
import { OperadorThorowErrorComponent } from './components/operador-thorow-error/operador-thorow-error.component';
import { OperadorAjaxComponent } from './components/operador-ajax/operador-ajax.component';
import { OperadorForkJoinComponent } from './components/operador-fork-join/operador-fork-join.component';
import { OperadorZipComponent } from './components/operador-zip/operador-zip.component';
import { OperadorMergeConcatComponent } from './components/operador-merge-concat/operador-merge-concat.component';
import { OperadorMapComponent } from './components/operador-map/operador-map.component';
import { OperadorMapToComponent } from './components/operador-map-to/operador-map-to.component';
import { OperadorSwitchMapComponent } from './components/operador-switch-map/operador-switch-map.component';
import { OperadorPluckComponent } from './components/operador-pluck/operador-pluck.component';
import { OperadorToArrayComponent } from './components/operador-to-array/operador-to-array.component';
import { OperadorFilterComponent } from './components/operador-filter/operador-filter.component';
import { OperadorTakeComponent } from './components/operador-take/operador-take.component';
import { OperadorTakeUntilComponent } from './components/operador-take-until/operador-take-until.component';
import { OperadorTakeWhileComponent } from './components/operador-take-while/operador-take-while.component';
import { OperadorSkipComponent } from './components/operador-skip/operador-skip.component';
import { OperadorDebounceTimeComponent } from './components/operador-debounce-time/operador-debounce-time.component';
import { OperadorSwitchAllComponent } from './components/operador-switch-all/operador-switch-all.component';
import { OperadorStartWithComponent } from './components/operador-start-with/operador-start-with.component';
import { OperadorCombineLatestComponent } from './components/operador-combine-latest/operador-combine-latest.component';
import { OperadorWithLastestFromComponent } from './components/operador-with-lastest-from/operador-with-lastest-from.component';
import { OperadorShareReplayComponent } from './components/operador-share-replay/operador-share-replay.component';
import { OperadorShareComponent } from './components/operador-share/operador-share.component';
import { OperadorCatchErrorComponent } from './components/operador-catch-error/operador-catch-error.component';
import { OperadorRetryComponent } from './components/operador-retry/operador-retry.component';
import { OperadorRetryWhenComponent } from './components/operador-retry-when/operador-retry-when.component';
import { OperadorTapComponent } from './components/operador-tap/operador-tap.component';
import { OperadorDelayComponent } from './components/operador-delay/operador-delay.component';
import { OperadorEveryComponent } from './components/operador-every/operador-every.component';
import { OperadorFindComponent } from './components/operador-find/operador-find.component';
import { OperadorFindIndexComponent } from './components/operador-find-index/operador-find-index.component';
import { OperadorIsEmptyComponent } from './components/operador-is-empty/operador-is-empty.component'
import { ApiServiceService } from './services/api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    JqueryTestesComponent,
    MonkeyTypeComponent,
    TesteComponent,ObservablesComponent,
    OperadorFromComponent,
    OperadorOfComponent,
    OperadorFromEventComponent,
    OperadorIntervalComponent,
    OperadorTimeComponent,
    OperadorThorowErrorComponent,
    OperadorAjaxComponent,
    OperadorForkJoinComponent,
    OperadorZipComponent,
    OperadorMergeConcatComponent,
    OperadorMapComponent,
    OperadorMapToComponent,
    OperadorSwitchMapComponent,
    OperadorPluckComponent,
    OperadorToArrayComponent,
    OperadorFilterComponent,
    OperadorTakeComponent,
    OperadorTakeUntilComponent,
    OperadorTakeWhileComponent,
    OperadorSkipComponent,
    OperadorDebounceTimeComponent,
    OperadorSwitchAllComponent,
    OperadorStartWithComponent,
    OperadorCombineLatestComponent,
    OperadorWithLastestFromComponent,
    OperadorShareReplayComponent,
    OperadorShareComponent,
    OperadorCatchErrorComponent,
    OperadorRetryComponent,
    OperadorRetryWhenComponent,
    OperadorTapComponent,
    OperadorDelayComponent,
    OperadorEveryComponent,
    OperadorFindComponent,
    OperadorFindIndexComponent,
    OperadorIsEmptyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LikeWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
