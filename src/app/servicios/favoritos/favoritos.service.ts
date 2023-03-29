import { GuardianGuard } from './../../guardian.guard';
import { LoginService } from './../../servicios/login/login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  constructor(private guardianGuard: GuardianGuard) {
  }

  getObras(): string[] {
    let lista: string[] = [];
    lista = JSON.parse(localStorage.getItem("obras_favoritos")!)
    return lista == null ? [] : lista;
  }

  getAutores(): string[] {
    let lista: string[] = JSON.parse(localStorage.getItem("autores_favoritos")!);
    return lista == null ? [] : lista;
  }

  guardarObra(elemento: string) {
    if (this.guardianGuard.verificarSesion()) {
      let lista: string[] = this.getObras();
      lista.push(elemento);
      localStorage.setItem("obras_favoritos", JSON.stringify(lista));
    }
  }

  guardarAutor(elemento: string) {
    if (this.guardianGuard.verificarSesion()) {
      let lista: string[] = this.getAutores();
      lista.push(elemento);
      localStorage.setItem("autores_favoritos", JSON.stringify(lista));
    }
  }

  guardarObras(lista: string[]) {
    localStorage.setItem("obras_favoritos", JSON.stringify(lista));
  }

  guardarAutores(lista: string[]) {
    localStorage.setItem("autores_favoritos", JSON.stringify(lista));
  }

  eliminarObra(elemento: string) {
    let lista: string[] = this.getObras();
    lista = lista?.filter(u => u !== elemento);
    this.guardarObras(lista);
    alert("Favorito eliminado: " + elemento);
  }

  eliminarAutor(elemento: string) {
    let lista: string[] = this.getAutores();
    lista = lista?.filter(u => u !== elemento);
    this.guardarAutores(lista);
    alert("Favorito eliminado: " + elemento);
  }
}
