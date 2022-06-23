import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PasosRegistroGuard implements CanActivate {

  constructor(
    private registerService: RegisterService,
    private router: Router
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let canPass = this.registerService.whatStep(route.url[0].path);         // Se evalúan los pasos que ha recorrido el usuario

    return canPass ? true : this.router.navigateByUrl('/registrarse');      // Si se intenta saltar uno, se redirecciona a *registrarse*
  }
  
}
