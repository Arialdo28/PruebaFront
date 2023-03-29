import { FavoritosService } from './../../../servicios/favoritos/favoritos.service';
import { Router } from '@angular/router';
import { ObraService } from './../../../servicios/obra/obra.service';
import { Obra } from './../../../modelo/Obra';
import { Component } from '@angular/core';

@Component({
  selector: 'app-obra-list',
  templateUrl: './obra-list.component.html',
  styleUrls: ['./obra-list.component.css']
})
export class ObraListComponent {

  obra: Obra = new Obra();
  obras!: Obra[];
  author: string = "";

  constructor(private obraService: ObraService, private favoritosService: FavoritosService, private router: Router) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.author = localStorage.getItem("id_Author")!;
    this.obraService.getByAuthor(this.author).subscribe(datos => {
      this.obras = datos;
      let favoritos: string[] = this.favoritosService.getObras();
      for (var i = 0; i < favoritos.length; i++) {
        this.obras = this.obras?.filter(u => u.title !== favoritos[i]);
      }
    });
  }

  crear() {
    this.router.navigate(['obra/crear']);
  }

  ver(obra: Obra): void {
    this.obra = obra;
  }

  agregarFav(obra: string) {
    this.favoritosService.guardarObra(obra);
    this.cargarDatos();
  }

  eliminarFav(obra: string): void {
    this.favoritosService.eliminarObra(obra);
    this.cargarDatos();
  }
}