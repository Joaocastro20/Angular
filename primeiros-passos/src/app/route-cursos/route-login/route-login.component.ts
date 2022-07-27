import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-route-login',
  templateUrl: './route-login.component.html',
  styleUrls: ['./route-login.component.css']
})
export class RouteLoginComponent implements OnInit {

  usuario: Usuario = new Usuario()  

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    //console.log(this.usuario)
    this.authService.fazerLogin(this.usuario)

  }
}
