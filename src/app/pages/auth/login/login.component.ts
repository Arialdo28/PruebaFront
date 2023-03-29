import { Usuario } from '../../../modelo/Usuario';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginService } from './../../../servicios/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router) { }

  inicia: boolean = false;
  usuario: Usuario = new Usuario();

  ngOnInit() {
  }

  iniciarSesion() {
    this.inicia = this.loginService.iniciarSesion(this.usuario.usuario, this.usuario.clave);
    if (this.inicia)
      this.router.navigate(['favoritos']);
    else
      alert("No hay conincidencias");
  }

  cerrarSesion() {
    this.loginService.cerrarSesion();
    this.usuario = new Usuario();
    this.inicia = false;
  }

}
