import { GuardianGuard } from './guardian.guard';
import { FavoritosComponent } from './pages/favoritos/favoritos/favoritos.component';
import { ObraListComponent } from './pages/obra/obra-list/obra-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthorListComponent } from './pages/author/author-list/author-list.component';
import { ObraCrearComponent } from './pages/obra/obra-crear/obra-crear.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorCrearComponent } from './pages/author/author-crear/author-crear.component';


const routes: Routes = [ 
  { path: 'obra/crear', component: ObraCrearComponent },
  { path: 'obra/listar', component: ObraListComponent },
  { path: 'author/crear', component: AuthorCrearComponent },
  { path: 'author/listar', component: AuthorListComponent },
  { path: 'favoritos', component: FavoritosComponent, canActivate: [GuardianGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
