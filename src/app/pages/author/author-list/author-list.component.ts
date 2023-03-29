import { FavoritosService } from './../../../servicios/favoritos/favoritos.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/modelo/Author';
import { AuthorService } from 'src/app/servicios/author/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {

  constructor(private authorService: AuthorService, private favoritosService: FavoritosService, private router: Router) { }

  authors!: string[];

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.authors = JSON.parse(localStorage.getItem("authores")!);
    let favoritos: string[] = this.favoritosService.getAutores();
    for(var i = 0; i< favoritos.length; i++)
    {
      this.authors = this.authors?.filter(u => u !== favoritos[i]);
    }
  }

  init() {
    this.authorService.getAll().subscribe(datos => {
      this.authors = datos.authors;
      this.authorService.guardar(this.authors);
    });
  }

  verObras(author: string): void {
    localStorage.setItem("id_Author", author);
    this.router.navigate(['obra/listar']);
  }

  agregarFav(autor: string) {
    this.favoritosService.guardarAutor(autor);
  }

  eliminarFav(autor: string): void {
    this.favoritosService.eliminarAutor(autor);
    this.favoritosService.getAutores();
  }

  eliminar(author: string): void {
    this.authors = this.authors?.filter(u => u !== author);
    this.authorService.guardar(this.authors);
    alert("Author eliminado: " + author);
  }

}