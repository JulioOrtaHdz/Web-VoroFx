import { Injectable } from '@angular/core';
import { CryptoServiceService } from './crypto-service.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  // Los campos a verificar 
  campos = [
    'email',
    'password',

    'name',
    'first_last_name',
    'birth',

    'country',
    'direction',
    'external',
    'postal',
    'state',
    'city',
  ];

  camposSocio = [
    
    'email',
    'password',
    'business',

    'name',
    'first_last_name',
    'birth',
  ]

  user: any;

  constructor(private crypto: CryptoServiceService) { }

  public whatStep(ruta: string) {

    const lroute = ruta.length - 1;
    // Se pregunta a qué ruta se quiere ir
    if (ruta[lroute] == '1' || ruta[lroute] == '2' || ruta[lroute] == '3' || ruta[lroute] == '4') {
      let dataCount = 0;
      dataCount = Number(ruta[lroute]) == 2 ? 2 : Number(ruta[lroute]) == 3 ? 5 : Number(ruta[lroute]) == 4 ? 11 : 0; // Se evaluará la cantidad de campos que se encuentran en la variable *campos*

      return this.verifyJson() ? this.verifySteps(dataCount) : false;   // Se verifica que exista el registro en localstorage y que sea posible pasarlo a json, de ser exitoso se evalúan todos los campos
    } else {
      return false;
    }
  }

  setStep(step: string) {
    localStorage.setItem("step", step);
  }

  get step() {
    return localStorage.getItem("step");
  }

  verifyJson() {

    let dataEncrypt = localStorage.getItem('user') || '';     // Se obtienen los datos de pasos
    let user = this.crypto.decrypt(dataEncrypt) || '{}';      // anteriores y se desencripta

    try {
      user ? this.user = JSON.parse(user) : false;            // El json se guarda en una variable en caso de ser posible parsearla
      return user != null ? true : false;                     // y se confirma que es un dato válido
    } catch (error) {
      return false;
    }
  }

  verifySteps(dataCount: Number): boolean {

    if(!this.user.typeAccount){
      for (let i = 0; i < dataCount; i++) {                                                           // Se recorren todos los campos dependiendo de la ruta a la
        let campo = String(this.campos[i]);                                                            // que se quiera acceder y se evalúan cada una de ellas para
        if (this.user[campo] == '' || this.user[campo] == null || this.user[campo] == undefined) {    // comprobar que el usuario ha llenado los campos correctamente
          return false;
        }
      }
  
      return true;
    }else{
      return this.verifyStepsToPartner(dataCount);
    }

    
  }

  verifyStepsToPartner(dataCount: Number): boolean{

    dataCount = dataCount == 2 ? 3 : dataCount == 5 ? 0 : dataCount == 11 ? 6 : 0;

    console.log("Datos a buscar: ", dataCount);

    if(dataCount == 0){
      return false;
    }

    for (let i = 0; i < dataCount; i++) {                                                           // Se recorren todos los campos dependiendo de la ruta a la
      let campo = String(this.camposSocio[i]);                                                            // que se quiera acceder y se evalúan cada una de ellas para
      if (this.user[campo] == '' || this.user[campo] == null || this.user[campo] == undefined) {    // comprobar que el usuario ha llenado los campos correctamente
        
        console.log("Este dato no está:", this.user[campo], campo);

        return false;
      }
    }

    return true;
  }
}
