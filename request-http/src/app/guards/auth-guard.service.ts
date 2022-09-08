import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CursosServiceService } from '../cursos-service.service';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements Resolve<Curso> {

  constructor(
    private service: CursosServiceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso> {
    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id']);
    }
    return of({
      id: null,
      nome:null
    });
  }
}
