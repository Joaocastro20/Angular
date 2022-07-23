import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../route-login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private AuthService: AuthService,
    private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
  ): Observable<boolean>|boolean{

    if (this.AuthService.usuarioEstaAutenticado()){
      return true
    }
    this.router.navigate(['/login'])
    return false
  }
}
