import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanComponentDeactive } from 'src/app/guards/salir-registro.guard';
import { CryptoServiceService } from 'src/app/services/crypto-service.service';
import { Modal } from 'src/app/utils/classes/modal.class';
import { VorofxService } from 'src/app/services/vorofx.service';
import { LangToggleService } from 'src/app/services/lang-toggle.service';

declare function ChangeLangLocalize(lang: string): any;

@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.component.html',
  styleUrls: ['./paso2.component.css']
})
export class Paso2Component extends Modal implements OnInit, CanComponentDeactive {


  // VALORES TRAIDOS POR DEVOLVER A LA VISTA
  dataEncrypt = localStorage.getItem('user') || '';
  user = this.crypto.decrypt(this.dataEncrypt) || '{}';

  datosPasoAnterior = JSON.parse(this.user || '{}');

  token = localStorage.getItem("tokenRegister") || '';

  lang =  localStorage.getItem("ljs-lang") || "es";

  isPartner = false;

  // APOYO A LAS VISTAS
  input: any;
  left: any;
  placeholder: any;
  telInputObj: any;

  initialInputTel = {
    separateDialCode: true,
    initialCountry: 'Mx',
    customPlaceholder: function (selectedCountryPlaceholder: any, selectedCountryData: any) {     // Se elimina el placeholder del input
      return "";                                                                                  // que genera la librería para agregar
    }                                                                                             // el placeholder personalizado
  };

  // CONTROLES DEL FORMULARIO
  name = new FormControl(this.datosPasoAnterior.name || '', [
    Validators.required,
    Validators.minLength(2)
  ]);
  paterno = new FormControl(this.datosPasoAnterior.first_last_name || '', [
    Validators.required,
    Validators.minLength(2)
  ]);
  materno = new FormControl(this.datosPasoAnterior.second_last_name || '', [
    Validators.minLength(2)
  ]);

  nacimiento = new FormControl(this.datosPasoAnterior.birth, [
    Validators.required
  ]);

  numero = new FormControl('', []);

  personalesForm = new FormGroup({
    name: this.name,
    first_last_name: this.paterno,
    second_last_name: this.materno,
    birth: this.nacimiento
  });

  // VARIABLES DE APOYO PARA VISTA
  load = false;
  maxDate: any;


  constructor(
    private router: Router,
    private crypto: CryptoServiceService,
    public resolve: ComponentFactoryResolver,
    private vorofx: VorofxService,
    private toggleLang: LangToggleService
  ) {
    super(resolve);
    // Se agrega un límite a partir de 18 años
    const date = new Date();
    const year = date.getFullYear() - 18;
    const day = date.getDate();
    const month = date.getMonth();
    this.maxDate = new Date(year, month, day);

    this.isPartner = this.datosPasoAnterior.typeAccount;
  }

  ngOnInit(): void { }

  onSubmit() {

    this.load = true;

    // Se comprueba el formato de la fecha de nacimiento para convertirla
    let date = this.personalesForm.value.birth;
    try {
      this.personalesForm.value.birth = date.toLocaleDateString();
    } catch (error) {                                                                     // Si ocurrió un fallo al convertir la fecha, significa que ya fue
      this.personalesForm.value.birth = this.validarFormatoFecha(date) ? date : '';       // convertida, fue manipulada por el usuario o simplemente el dato se ha roto.
    }

    this.personalesForm.value.date = date;

    let user = this.datosPasoAnterior = Object.assign(this.datosPasoAnterior, this.personalesForm.value);
    // this.isPartner = user.typeAccount;
    user = JSON.stringify(user);
    const userCrypt = this.crypto.encrypt(user);
    localStorage.setItem("user", userCrypt);
    localStorage.setItem("step", "2");

    this.personalesForm.value.token = this.token;

    this.vorofx.step2(this.personalesForm.value).subscribe(
      (data) => this.handdleResponse(data),
      (error) => this.handdleError(error)
    );
  }

  handdleResponse(data: any) {
    localStorage.setItem("tokenRegister", data.token);
    this.load = false;
    if(!this.isPartner)
      this.router.navigate(['/registrarse/paso_3']);
    else
      this.router.navigate(['/registrarse/paso_4']);
  }

  handdleError(error: any) {
    console.log(error);



    switch (error.status) {
      case 300: console.log(error);
        this.modalMaintenaince();
        break;
      case 405: this.modalToken(true);
        break;
      case 402: this.modalToken(false);
        break;
      case 401: this.launchModal({
        tittle: "Error",
        text: error.error.error,
        closeButton: true,
        clickOutside: true,
        isObject: true
      });
        break;
      default: console.log(error);
        this.modalMaintenaince();
        break;
    }

    this.load = false;
  }

  closeModal(): void {
    this.router.navigate(['/registrarse']);
  }

  validarFormatoFecha(date: string) {
    var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    if ((date.match(RegExPattern)) && (date != '')) {
      return true;
    } else {
      return false;
    }
  }


  iCanGoOut(): boolean {
    let flag = true;
    Object.keys(this.personalesForm.controls).forEach(key => {
      if (flag) {
        flag = (this.personalesForm.controls[key].errors && this.personalesForm.touched && this.personalesForm.controls[key].value) || (this.personalesForm.controls[key].value && this.personalesForm.touched) ? false : true;
      }
    });
    return flag;
  }

  openLangMenu(e: any, close = false, isEvent = false): void {
    e.classList.toggle("hidden");

    if(close){
        e.classList.add("hidden");
    }
  }

  changeLang(event: any) {
    ChangeLangLocalize(event);
    this.toggleLang.toggle(this.lang);
  }

  // // Se ajusta el placeholder y se almacena la instancia de
  // // la librería TelInput
  // getElement(event: any) {
  //   this.telInputObj = event;

  //   // Se obtienen los elementos html
  //   this.input = event.a as HTMLInputElement;
  //   const input = this.input as HTMLInputElement;
  //   // Se asigna el espaciado inicial
  //   this.left = input.style.paddingLeft;
  //   let parent = input.parentElement;
  //   // Se crea el placeholder
  //   let placeholder = document.createElement("span");
  //   placeholder.append('Número telefónico');
  //   placeholder.classList.add("placeholder");
  //   placeholder.style.left = this.left;
  //   parent?.appendChild(placeholder);
  //   this.placeholder = placeholder;

  //   // Se agrega el valor cuando la librería se carga(evita errores)
  //   this.personalesForm.controls['numero'].addValidators(this.telValidator());

  // }

  // // Cada vez que se cambie de código de país, el placeholder
  // // se correrá el mismo espacio que el padding del input
  // onCountryChange(event: Event) {
  //   const input = this.input as HTMLInputElement;
  //   this.left = input.style.paddingLeft;
  //   this.placeholder.style.left = this.left;
  // }

  // // Valida los distintos errores existentes al introducir un número de teléfono
  // telValidator(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     var validatorErrorObject = {
  //       'telefono': {
  //         'requiredPattern': ''
  //       }
  //     }
  //     const error = this.telInputObj.getValidationError();
  //     switch (error) {
  //       case 0:
  //         return null;
  //       case 1:
  //         validatorErrorObject.telefono.requiredPattern = "Código de país inválido.";
  //         break;
  //       case 3:
  //         validatorErrorObject.telefono.requiredPattern = "Número demasiado largo.";
  //         break;
  //       case 2:
  //         validatorErrorObject.telefono.requiredPattern = "Número demasiado corto.";
  //         break;
  //       case 4:
  //         validatorErrorObject.telefono.requiredPattern = "El número es solo local.";
  //         break;
  //       case 5:
  //         validatorErrorObject.telefono.requiredPattern = "El tamaño no es el aceptado.";
  //         break;
  //       case -99:
  //         validatorErrorObject.telefono.requiredPattern = control.value ? 'Formato inválido' : 'Número es requerido';
  //         break;
  //     }

  //     // Suele pasar que al estar el campo vacío, se siga evaluando como numero demasiado corto
  //     // Esto lo soluciona seteando nuevamente el mensaje de error
  //     validatorErrorObject.telefono.requiredPattern = control.value ? validatorErrorObject.telefono.requiredPattern : 'Número es requerido';
  //     return validatorErrorObject;
  //   };

  // }

}
