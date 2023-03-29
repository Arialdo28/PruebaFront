import { Router } from '@angular/router';
import { FavoritosService } from './../../../servicios/favoritos/favoritos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {


  constructor(private favoritosService: FavoritosService, private router: Router) { }

  favoritosAutor!: string[];
  favoritosObras!: string[];

  ngOnInit() {
    this.listarAutores();
    this.listarObras();
  }

  listarAutores() {
    this.favoritosAutor = this.favoritosService.getAutores();
  }

  listarObras() {
    this.favoritosObras = this.favoritosService.getObras();
  }

  eliminarFavAutor(favorito: string): void {
    console.log(favorito);
    this.favoritosService.eliminarAutor(favorito);
    this.listarAutores();
  }

  eliminarFavObra(favorito: string): void {
    this.favoritosService.eliminarObra(favorito);
    this.listarObras();
  }

  verObras(author: string): void {
    localStorage.setItem("id_Author", author);
    this.router.navigate(['obra/listar']);
  }
}
