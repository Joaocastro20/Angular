import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  cursoForm!: FormGroup;

  constructor(
    private fb : FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cursoForm = this.fb.group({
      nome: [null,[Validators.required, Validators.minLength(3),Validators.maxLength(25)]]
    })
  }
  onSubmit(){
    
  }
  onCancel(){
    this.cursoForm.reset();
  }
  validarForm(){
    return this.cursoForm.valid
  }
  hasError(field: string){
    return this.cursoForm.get(field)?.errors
  }
  hasTouch(field:string){
    return this.cursoForm.get(field)?.touched
  }
}
