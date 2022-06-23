import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
// import { Pa}
import { Paso2Component } from '../auth/registro/paso2/paso2.component';
import { Paso3Component } from '../auth/registro/paso3/paso3.component';
import { Paso4Component } from '../auth/registro/paso4/paso4.component';

export interface CanComponentDeactive {
  thereAreChange(): boolean,
  subject: Subject<boolean>
}

@Injectable({
  providedIn: 'root'
})
export class SalirRegistroGuard implements CanDeactivate<CanComponentDeactive> {
  canDeactivate(
    component: CanComponentDeactive,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const ruta = nextState?.url;
    if (
      ruta == "/registrarse" ||
      ruta == "/registrarse/paso_1" ||
      ruta == "/registrarse/paso_2" ||
      ruta == "/registrarse/paso_3" ||
      ruta == "/registrarse/paso_4"
    ) {
      return true;
    } else {

      let subject = new Subject<boolean>();

      const thereAreChanges = typeof component.thereAreChange == "function" ? component.thereAreChange() : false;
      if (thereAreChanges) {
        subject = component.subject;
        let response = subject.asObservable();
        !response ? localStorage.removeItem('user') : true;
        !response ? localStorage.removeItem('tokenRegister') : true;
        return response;
      }else{
        return true;
      }
    }
  }

}
