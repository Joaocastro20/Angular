import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { catchError, empty, Observable, Subject } from 'rxjs';
import { CursosServiceService } from '../cursos-service.service';
import { Curso } from '../models/curso';
import { AlertModelComponent } from '../shared/alert-model/alert-model.component';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  @ViewChild('deleteModal') deleteModal: any;

  cursoSelect!: Curso;

  cursos!: Curso[];

  cursos$!: Observable<Curso[]>;

  error$ = new Subject<boolean>();

  bsModalRef!: BsModalRef;

  constructor(private service: CursosServiceService,
    public bsModalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private modalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    // this.service.list().subscribe(dados => this.cursos = dados);
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list()
      .pipe(
        catchError(error => {
          console.log(error);
          // this.error$.next(true);
          this.handleError();
          return empty();
        })
      );
  }
  handleError() {
    this.bsModalRef = this.bsModalService.show(AlertModelComponent);
    this.bsModalRef.content.tipo = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar os dados!';
  }

  onEdit(curso: any) {
    this.router.navigate(['editar', curso]), { relativeTo: this.route }
  }

  onDelete(curso: any) {
    this.cursoSelect = curso;
    this.modalRef = this.bsModalService.show(this.deleteModal, { class: 'modal-sm' });
  }

  onConfirmDelete() {
    this.service.delete(this.cursoSelect.id).subscribe(
      success => this.onRefresh(),
      error => alert('erro')
    );
    this.declineModal();
  }


  onDeclineDelete() {
    this.declineModal();
  }
  declineModal() {
    this.modalRef.hide();
  }
}
