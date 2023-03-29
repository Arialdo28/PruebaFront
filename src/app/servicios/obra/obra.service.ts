import { Obra } from './../../modelo/Obra';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObraService {

  readonly url = 'https://poetrydb.org/author/'

  constructor(private http: HttpClient) { }

  // cargarInfo() {
  //   lista: String[] = [];
  //   this.http.get<String[]>(this.url).subscribe(datos => {
  //   lista = datos;
  //   });
  //   this.guardar(lista);
  // }

  getByAuthor(author:string) {
    return this.http.get<Obra[]>(this.url+author);
  }

  // guardar(lista: String[]) {
  //   localStorage.setItem("authores", lista.toString());
  // }

  // eliminar(author: String) {
  //   localStorage.setItem("authores", lista.toString());

  //   return this.http.delete<Usuario>(this.url + usuario.idUsuario);
  // }
}
