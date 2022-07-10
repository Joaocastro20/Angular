import { EventEmitter, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAuth: boolean = false

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'admin' && usuario.senha === '123'){
      this.usuarioAuth = true
      this.mostrarMenuEmitter.emit(true)
      this.router.navigate(['/'])
    }else{
      this.usuarioAuth = false
      this.mostrarMenuEmitter.emit(false)
    }
  }

}
