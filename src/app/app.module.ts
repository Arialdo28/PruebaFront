import { AuthorService } from './servicios/author/author.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './pages/auth/login/login.component';
import { AuthorListComponent } from './pages/author/author-list/author-list.component';
import { ObraListComponent } from './pages/obra/obra-list/obra-list.component';
import { InfoObraComponent } from './pages/info-obra/info-obra.component';
import { AuthorCrearComponent } from './pages/author/author-crear/author-crear.component';
import { ObraCrearComponent } from './pages/obra/obra-crear/obra-crear.component';
import { HomeComponent } from './pages/home/home.component';
import { ObraService } from './servicios/obra/obra.service';
import { FavoritosComponent } from './pages/favoritos/favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthorListComponent,
    ObraListComponent,
    InfoObraComponent,
    AuthorCrearComponent,
    ObraCrearComponent,
    HomeComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ObraService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
