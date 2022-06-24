import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ComponentRef, ViewChild, ViewContainerRef, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CanComponentDeactive } from 'src/app/guards/salir-registro.guard';
import { VorofxService } from 'src/app/services/vorofx.service';
import { CryptoServiceService } from 'src/app/services/crypto-service.service';
import { Modal } from 'src/app/utils/classes/modal.class';
import { LangToggleService } from 'src/app/services/lang-toggle.service';

declare function ChangeLangLocalize(lang: string): any;

@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.component.html',
  styleUrls: ['./paso1.component.css']
})
export class Paso1Component extends Modal implements OnInit, CanComponentDeactive {

  // VARIABLES DE DATOS AL DEVOLVERTE A UN PASO ANTERIOR
  dataEncrypt = localStorage.getItem('user') || '';
  user = this.crypto.decrypt(this.dataEncrypt) || '{}';

  datosPasoAnterior = JSON.parse(this.user);

  lang =  localStorage.getItem("ljs-lang") || "es";
  hide = true;
  public hidden: boolean = false;

  // Variables de apoyo a vista
  public hidePassword = true;
  public load = false;
  public empresarial = this.datosPasoAnterior.busines ? true : false;
  public errors: any = null;

  // El porcentaje de seguridad representado con texto
  // y su texto a mostrar en pantalla
  public passSecurity = [
    {
      'percent': "",
      "text": 'ninguna'
    },
    {
      'percent': "soBad",
      "text": 'muy débil'
    },
    {
      'percent': "bad",
      "text": 'débil'
    },
    {
      'percent': "mid",
      "text": 'moderada'
    },
    {
      'percent': "high",
      "text": 'fuerte'
    },
    {
      'percent': "soHigh",
      "text": 'muy fuerte'
    },

  ];
  public passStep = 0; // Fortaleza de la contraseña

  public passString = ''; // Se enlaza con el campo "password" para validarlo en tiempo real y mostrar informacion en pantalla

  // Controles del formulario
  email = new FormControl('', [
    Validators.required,
    Validators.email,
    // Se valida el formato de correo
    // Basado en el formato "estandar", el uso de un correo sin dominio del lado del servidor causará errores, por ello se filtra de este lado
    Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  ]);
  password = new FormControl('', [
    Validators.required,
    // Se requiere al menos un número
    this.regexValidator(new RegExp(/\d/), {
      'number': {
        'requiredPattern': 'Número'
      }
    }, 'number'),
    // Se requiere al menos una mayuscula
    this.regexValidator(new RegExp(/[A-Z]/), {
      'mayuscula': {
        'requiredPattern': 'mayuscula'
      }
    }, 'mayuscula'),
    // Se requiere al menos una minuscula
    this.regexValidator(new RegExp(/[a-z]/), {
      'minuscula': {
        'requiredPattern': 'minuscula'
      }
    }, 'minuscula'),
    // Se requiere al menos 8 caracteres, maximo 50
    this.regexValidator(new RegExp(".{8,50}"), {
      'rango': {
        'requiredPattern': 'rango'
      }
    }, 'rango'),
    // Se requiere al menos un caracter especial
    this.regexValidator(new RegExp(/[$%&|<.;,*\-_:>#@]/), {
      'caracter': {
        'requiredPattern': 'caracter'
      }
    }, 'caracter'),
  ]);
  tyc = new FormControl('', [
    Validators.required
  ]);

  typeAccount = new FormControl('', [
    // Validators.required
  ])

  // Solo es requerido si selecciona la cuenta de tipo Empresarial
  busines = new FormControl('', []);

  // Formulario de registro, primer paso
  formRegistro = new FormGroup({
    email: this.email,
    password: this.password,
    business: this.busines,
    terms: this.tyc,
    typeAccount: this.typeAccount
  });

  correo: string = "";

  constructor(
    private router: Router,
    private crypto: CryptoServiceService,
    private vorofx: VorofxService,
    public resolve: ComponentFactoryResolver,
    private activatedRoute: ActivatedRoute,
    private toggleLang: LangToggleService
  ) {
    super(resolve);
    localStorage.removeItem('user');      // Se reinicia el token que registra los pasos que ha cursado el usuario

    this.activatedRoute.queryParams.subscribe(params => {
      this.correo = params.email || '';
    }
  );
  }

  ngOnInit(): void { }

  // CAPTURA LOS DATOS DEL FORMULARIO Y LOS ENVÍA PARA VERIFICAR
  registrarPaso() {
    this.load = true;
    this.formRegistro.value.typeAccount = this.formRegistro.value.typeAccount ? true : false;
    this.vorofx.verifyEmailAndPassword(this.formRegistro.value).subscribe(
      data => this.handdleResponse(data),
      error => this.handdleError(error)
    );
  }

  handdleResponse(data: any) {
    // crea un objeto que será validado por el guard
    const user = {
      email: this.formRegistro.value.email,
      password: data.user.password,
      typeAccount: this.formRegistro.value.typeAccount,
      business: this.formRegistro.value.business
    };

    // Se guarda el token en localStorage
    const token = data.user.token;
    localStorage.setItem('tokenRegister', token);

    // se convierte en string y se almacena en localStorage
    let userStringgify = JSON.stringify(user);
    userStringgify = this.crypto.encrypt(userStringgify);
    localStorage.setItem("user", userStringgify);

    this.router.navigate(['/registrarse/paso_2']);
    this.load = false;
  }

  handdleError(error: any) {
    const errorStatus = error.status;

    // se validan los tipos de errores que el servidor podría traer consigo
    switch (errorStatus) {
      case 401:
        this.errors = error.error.error;
        console.log(error.error.error);
        break;
      default: console.log(error);
        this.modalMaintenaince();
        break;
    }
    this.load = false;
  }

  // En caso que haya un error en cualquier campo, se mostrará un mensaje como validacion
  // y éste se borrará cuando el usuario haga un cambio en el campo de entrada
  // Solo borrará el que le pertenezca
  reset(campo: string = '') {
    if (this.errors) {
      // campo != "pass" ? this.errors.password = null : campo != "businnes" ? this.errors.businnes = null : this.errors.email = null;
      campo == "pass" ? this.errors.password = null : false;
      campo == "business" ? this.errors.business = null : false;
      campo == "email" ? this.errors.email = null : false;
    }
  }

  // Validacion de cada una de las reglas de la contraseña
  // Recibe una expresion regular para cada una de las caracteristicas de la contraseña
  regexValidator(regex: RegExp, error: ValidationErrors, name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;
      error[name].actualValue = value;
      return regex.test(value) ? null : error;
    };
  }

  // Valida la seguridad de la contraseña para mostrar el tamaño de la barra
  valid() {
    this.passStep = 0;
    this.passStep += this.password.hasError('number') ? 0 : 1;
    this.passStep += this.password.hasError('mayuscula') || this.password.hasError('minuscula') ? 0 : 1;
    this.passStep += this.password.hasError('rango') ? 0 : 1;
    this.passStep += this.password.hasError('caracter') ? 0 : 1;
    this.passStep += this.passString.length > 10 ? 1 : 0;
    this.passStep = this.passString.length == 0 ? 0 : this.passStep;
  }

  // Al cambiar de tipo de cuenta (Personal/Empresarial) se muestra un nuevo campo
  // y se implementa un nuevo validador, así como tambien se re-evalúa el formulario
  onChangeAccount(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    const typeAccount = element.checked;

    this.empresarial = typeAccount ? true : false;

    if (typeAccount) {
      this.formRegistro.controls['business'].addValidators(Validators.required);
      this.formRegistro.controls['business'].updateValueAndValidity();

      // this.router.navigateByUrl('/registro_socio');
    } else {
      this.formRegistro.controls['business'].clearValidators();
      this.formRegistro.controls['business'].updateValueAndValidity();
    }
    if(this.errors != null && this.errors.business){
      this.errors.business = null;
    }
    // console.log(this.formRegistro.value);
  }

  iCanGoOut(): boolean {
    let flag = true;
    Object.keys(this.formRegistro.controls).forEach(key => {
      if (flag) {
        flag = (this.formRegistro.controls[key].errors && this.formRegistro.touched&& this.formRegistro.controls[key].value) || (this.formRegistro.controls[key].value && this.formRegistro.touched) ? false : true;
      }
    });
    return flag;
  }

  openLang(){
    this.hide = false;
  }

  closeLang(e: any){
    if(!e.target.classList.contains("btn_open_lang")){
      this.hide = true;
    }
  }

  onChange(value: any){
    ChangeLangLocalize(value);
  }

  void(){

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

}
