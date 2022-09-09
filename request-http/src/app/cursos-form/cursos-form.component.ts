import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CursosServiceGenericoService } from '../cursos-service-generico.service';
import { CursosServiceService } from '../cursos-service.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss'],
  preserveWhitespaces: true
})
export class CursosFormComponent implements OnInit {

  cursoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: CursosServiceGenericoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe(
    //   (params:any) => {
    //     const id = params['id'];
    //     const curso$ = this.service.loadById(id);
    //     curso$.subscribe(curso => {
    //       this.updateForm(curso);
    //     })
    //   }
    // )

    const curso = this.route.snapshot.data['curso'];

    this.cursoForm = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]]
    })
  }
  onSubmit() {
    if(this.cursoForm.value.id){
      this.service.update(this.cursoForm.value).subscribe(
        sucess => alert('update, successo'),
        error => alert('update, Error')
      );
      this.router.navigate(['']);
    }else{
      this.service.create(this.cursoForm.value).subscribe(
        sucess => alert('successo'),
        error => alert('Error')
      );
      this.router.navigate(['']);
    }
    
  }
  // updateForm(curso:any){
  //   this.cursoForm.patchValue({
  //     id: curso.id,
  //     nome: curso.nome
  //   })
  // }
  onCancel() {
    this.cursoForm.reset();
  }
  validarForm() {
    return this.cursoForm.valid
  }
  hasError(field: string) {
    return this.cursoForm.get(field)?.errors
  }
  hasTouch(field: string) {
    return this.cursoForm.get(field)?.touched
  }
}
