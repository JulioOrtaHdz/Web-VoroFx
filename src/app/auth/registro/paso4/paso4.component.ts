import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { CryptoServiceService } from 'src/app/services/crypto-service.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { VorofxService } from 'src/app/services/vorofx.service';
import { timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Modal } from 'src/app/utils/classes/modal.class';
import { CanComponentDeactive } from 'src/app/guards/salir-registro.guard';
import { LangToggleService } from 'src/app/services/lang-toggle.service';

declare function ChangeLangLocalize(lang: string): any;
@Component({
  selector: 'app-paso4',
  templateUrl: './paso4.component.html',
  styleUrls: ['./paso4.component.css']
})
export class Paso4Component extends Modal implements OnInit, CanComponentDeactive {
  input: any;
  left: any;
  placeholder: any;
  load = false;
  loadCode = false;
  telInputObj: any;
  telInputUtils: any;
  enviado = false;
  wrongCode: any = null;

  token = localStorage.getItem('tokenRegister') || null;

  private baseUrl = environment.url_login;
  private loginToken = "";
  lang = localStorage.getItem("ljs-lang") || "es";

  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;
  tiempoHTML: any;
  timer = false;
  loadingPlatform = false;

  validationError = {
    "IS_POSSIBLE": 0,
    "INVALID_COUNTRY_CODE": 1,
    "TOO_SHORT": 2,
    "TOO_LONG": 3,
    "IS_POSSIBLE_LOCAL_ONLY": 4,
    "INVALID_LENGTH": 5,
  };

  // APOYO A LAS VISTAS
  initialInputTel = {
    separateDialCode: true,
    initialCountry: 'Mx',
    customPlaceholder: function (selectedCountryPlaceholder: any, selectedCountryData: any) {     // Se elimina el placeholder del input
      return "";                                                                                  // que genera la librería para agregar
    }                                                                                             // el placeholder personalizado
  };

  // VARIABLES TRAÍDOS AL DEVOLVERTE A LA VISTA
  dataCrypt = localStorage.getItem('user') || '';
  user = this.crypto.decrypt(this.dataCrypt) || '{}';
  datosPasoAnterior = JSON.parse(this.user || '{}');

  // CONTROLES DEL FORMULARIO
  numero = new FormControl('', [    // No requiere un validador de requerido, se implementa en el método telValidator()
  ]);
  codigo = new FormControl('', [
    Validators.required,
    Validators.maxLength(6),
    Validators.minLength(6),
    Validators.pattern(/^([a-zA-Z0-9]){1,16}$/)  //Solo permite dígitos
  ]);

  // Formulario
  formValidar = new FormGroup({
    numero: this.numero,
    codigo: this.codigo
  });

  constructor(private crypto: CryptoServiceService, private vorofx: VorofxService, private router: Router, public resolve: ComponentFactoryResolver,
    private toggleLang: LangToggleService) {
    super(resolve);
  }

  ngOnInit(): void {
  }

  // Se ajusta el placeholder y se almacena la instancia de
  // la librería TelInput
  getElement(event: any) {
    this.telInputObj = event;

    // Se obtienen los elementos html
    this.input = event.a as HTMLInputElement;
    const input = this.input as HTMLInputElement;
    // Se asigna el espaciado inicial
    this.left = input.style.paddingLeft;
    let parent = input.parentElement;
    // Se crea el placeholder
    let placeholder = document.createElement("span");
    placeholder.append('Número telefónico');
    placeholder.classList.add("placeholder");
    placeholder.style.left = this.left;
    parent?.appendChild(placeholder);
    this.placeholder = placeholder;

    // Se agrega el valor cuando la librería se carga(evita errores)
    this.formValidar.controls['numero'].addValidators(this.telValidator());

  }

  // Cada vez que se cambie de código de país, el placeholder
  // se correrá el mismo espacio que el padding del input
  onCountryChange(event: Event) {
    const input = this.input as HTMLInputElement;
    this.left = input.style.paddingLeft;
    this.placeholder.style.left = this.left;
  }

  // Valida los distintos errores existentes al introducir un número de teléfono
  telValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      var validatorErrorObject = {
        'telefono': {
          'requiredPattern': ''
        }
      }
      const error = this.telInputObj.getValidationError();
      switch (error) {
        case 0:
          return null;
        case 1:
          validatorErrorObject.telefono.requiredPattern = "Código de país inválido.";
          break;
        case 3:
          validatorErrorObject.telefono.requiredPattern = "Número demasiado largo.";
          break;
        case 2:
          validatorErrorObject.telefono.requiredPattern = "Número demasiado corto.";
          break;
        case 4:
          validatorErrorObject.telefono.requiredPattern = "El número es solo local.";
          break;
        case 5:
          validatorErrorObject.telefono.requiredPattern = "El tamaño no es el aceptado.";
          break;
        case -99:
          validatorErrorObject.telefono.requiredPattern = control.value ? 'Formato inválido' : 'Número es requerido';
          break;
      }

      // Suele pasar que al estar el campo vacío, se siga evaluando como numero demasiado corto
      // Esto lo soluciona seteando nuevamente el mensaje de error
      validatorErrorObject.telefono.requiredPattern = control.value ? validatorErrorObject.telefono.requiredPattern : 'Número es requerido';
      return validatorErrorObject;
    };

  }

  solicitarCodigo() {
    this.loadCode = true;
    const tel = this.telInputObj.getNumber();
    const code = this.telInputObj.s.dialCode;
    // console.log(this.telInputObj.s);
    this.vorofx.step4({
      numero: tel,
      token: this.token,
      country_code: code
    }).subscribe(
      data => this.handdleResponse(data),
      error => this.handdleError(error)
    );
  }

  handdleResponse(data: any) {

    console.log(data);

    this.loadCode = false;        // no se para qué es :v

    // // Si se envió un código, se actualiza el token
    const token = data.token;
    localStorage.setItem('tokenRegister', token);

    // Caso que no se envíe un status "ok", significa que el código se ha enviado por segunda y/o tercera vez
    // por ende el tiempo de espera será más largo (5 minutos con 30 segundos)
    let date = new Date(data.time);

    try {
      if (isNaN(date.getTime())) {
        date = new Date();
      }
    } catch (e) {
      date = new Date();
    }

    let miliSeconds = date.getTime();
    var addMlSeconds = (Number(data.minutos) * 60000) + 30000;
    let timeLimit = new Date(miliSeconds + addMlSeconds) as any;

    // Se mostrará el contador o el mensaje "¿No has recibido el código?" solo
    // si se ha enviado un código exitosamente
    this.enviado = true;
    this.cuentaRegresiva(timeLimit);
  }

  handdleError(error: any, codigo = false) {
    this.load = false;
    const status = error.status;

    this.loadCode = false;

    console.log(error);

    // Se evalúan los distintos errores existentes
    switch (status) {
      case 300: console.log("Mantenimiento");
        this.modalMaintenaince();
        break;
      case 405: console.log("Tiempo agotado");
        this.modalToken(true);
        break;
      case 402: this.modalToken(false);
        break;
      case 401: this.errorsManagement(error.error, codigo);       // El código de error 401 puede deberse a multiples causas, se requiere evaluación
        break;
      default: console.log("error desconocido", error);
        this.modalMaintenaince();
        break;
    }
  }

  errorsManagement(error: any, codigo = false) {
    const errorCode = error.error;

    console.log("codigo: ", errorCode);

    this.wrongCode = {};

    switch (errorCode) {
      // Vonage envía el código de error Nro 3 si el formato dado es incorrecto, independientemente de si se trata de una
      // solicitud de código o una verificación, por ende se evalúa si el error proviene de la verificación o de la petición
      case "3": codigo ? this.wrongCode.codigo = ["El formato es incorrecto."] : this.wrongCode.numero = ["El formato es incorrecto."];
        break;
      case "16": this.wrongCode.codigo = ["El código es incorrecto."];
        break;
      case "17": this.wrongCode.codigo = ["Has introducido demasiadas veces el código."];
        break;
      case "98": console.log("token incorrecto");                     // Este error solo puede ocurrir cuando el token ha sido manipulado,
        this.modalToken();                                           // no exista o no se haya verificado correctamente.
        break;
      case "90": this.wrongCode = error.errors;                         // Este error ocurre cuando un dato no cumple con alguna de las validaciones
        this.errorsReturned();
        break;
      default: console.log(error);                                            // Caso que el error no sea totalmente reconocido
        this.modalMaintenaince();
        break;
    }
  }

  errorsReturned() {
    if (this.wrongCode && (!this.wrongCode.codigo || !this.wrongCode.numero)) {
      this.launchModal({
        tittle: "Error",
        text: this.wrongCode,
        closeButton: true,
        clickOutside: true,
        isObject: true
      });
      // // Si hubo algún error con el correo y/o contraseña
      // if (this.wrongCode.email || this.wrongCode.password) {
      //   this.router.navigateByUrl('/registrarse/paso_1');
      // } else if (this.wrongCode.name || this.wrongCode.first_last_name || this.wrongCode.second_last_name || this.wrongCode.birth) {   // Se hay algún error en el segundo paso
      //   this.router.navigateByUrl('/registrarse/paso_2');
      // } else if (this.wrongCode.country || this.wrongCode.direction || this.wrongCode.external || this.wrongCode.postal || this.wrongCode.state || this.wrongCode.city) { // Si hay algún error en el tercer paso
      //   this.router.navigateByUrl('/registrarse/paso_3');
      // } else {
      //   this.modalMaintenaince();             // Si el error es completamente desconocido, se muestra un modal
      // }
    } else {
      this.modalMaintenaince(); // Si el error es desconocido
    }
  }

  cuentaRegresiva(timeLimit: any) {
    this.timer = true;        // Se muestra el temporizador

    this.minutes = -1;
    this.seconds = -1;

    this.clock = this.source.subscribe(t => {

      let now = new Date() as any;
      // Se obtiene la diferencia de tiempo entre que se envió el código SMS y el momento actual.
      let diferencia = timeLimit - now;     // El primer código dura 1 minuto con 30 segundos,
      // el segundo dura 5 minutos con 30 segundos
      const _second = 1000;
      const _minute = _second * 60;
      const _hour = _minute * 60;

      if (this.minutes != 0 || this.seconds != 0) {
        this.minutes = Math.floor((diferencia % _hour) / _minute);                                          // Se calculan los segundos
        this.seconds = Math.floor((diferencia % _minute) / _second);                                        // Se calculan los minutos
        this.tiempoHTML = `${this.formatoTiempo(this.minutes)}:${this.formatoTiempo(this.seconds)}`;        // Se formatean los datos para mostrarlos en pantalla
      } else {
        this.clock.unsubscribe();                               // Al terminar el contador, se desubscribe al contador
        console.log("Tiempo agotado");                          // y se imprime un mensaje
        this.timer = false;                                     // El contador desaparece de pantalla y muestra otro mensaje
      }
    })
  }

  formatoTiempo(tiempo: number) {
    return tiempo < 10 ? "0" + tiempo : tiempo;
  }

  registrarse() {
    this.load = true

    this.token = localStorage.getItem('tokenRegister') || 'null';

    const aux = {
      codigo: this.formValidar.value.codigo,
      token: this.token
    };

    this.vorofx.step5(aux).subscribe(
      (data: any) => {
        this.loginToken = data.token;
        window.location.href = this.baseUrl + this.loginToken;
      },
      (error) => {
        this.handdleError(error, true);
      }
    )

  }

  reset() {
    this.wrongCode = null;
  }

  iCanGoOut(): boolean {
    let flag = true;
    Object.keys(this.formValidar.controls).forEach(key => {
      if (flag) {
        flag = (this.formValidar.controls[key].errors && this.formValidar.touched && this.formValidar.controls[key].value) || (this.formValidar.controls[key].value && this.formValidar.touched) ? false : true;
      }
    });
    return flag;
  }

  openLangMenu(e: any, close = false, isEvent = false): void {
    e.classList.toggle("hidden");

    if (close) {
      e.classList.add("hidden");
    }
  }

  changeLang(event: any) {
    ChangeLangLocalize(event);
    this.toggleLang.toggle(this.lang);
  }
}

