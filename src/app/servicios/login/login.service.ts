import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  inicia: boolean = false;

  constructor() { }

  iniciarSesion(usuario: string, clave: string) : boolean{
    if (usuario === "admin" && clave === "admin")
      this.inicia = true;
    return this.inicia;
  }

  cerrarSesion() {
    this.inicia = false;
    return this.inicia;
  }

  getInicia(): boolean {
    return this.inicia;
  }
}
