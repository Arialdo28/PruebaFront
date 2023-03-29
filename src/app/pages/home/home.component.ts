import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {
  }

  irHome() {
    this.router.navigate(['/']);
  }

  irAuthors() {
    this.router.navigate(['author/listar']);
  }

  irFavoritos() {
    this.router.navigate(['favoritos']);
  }
  
  irLogin() {
    this.router.navigate(['login']);
  }
}
