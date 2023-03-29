import { LoginService } from './servicios/login/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.redireccionar(this.loginService.getInicia())
    return true;
  }

  verificarSesion() : boolean{
    this.redireccionar(this.loginService.getInicia());
    return this.loginService.getInicia();
  }

  redireccionar(flag: boolean) {
    if (!flag) {
      this.router.navigate(['login']);
      alert("Inicie sesión");
    }
  }

}
