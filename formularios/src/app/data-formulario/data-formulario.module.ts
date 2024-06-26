import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormularioComponent } from './data-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DataFormularioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DataFormularioModule { }
