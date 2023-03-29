import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from 'src/app/modelo/Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  readonly url = 'https://poetrydb.org/author'

  constructor(private http: HttpClient) { }

//  cargarInfo() {
//    this.http.get<String[]>(this.url).subscribe(datos => {
//      lista = datos;
//    });
//    this.guardar(lista);
//  }

  getAll() {
    return this.http.get<any>(this.url);
  }

  guardar(lista: String[]) {
    localStorage.setItem("authores", JSON.stringify(lista));
  }

  eliminar(author: String) {
    localStorage.getItem("authores");
  }

}
