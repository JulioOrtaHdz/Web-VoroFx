import { Injectable } from '@angular/core';
import { Correo } from '../correo.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  correos: Correo[] = [];
  agregarCorreo(correo: Correo) {
    this.correos.push(correo);
    console.log(correo);
  }

}
