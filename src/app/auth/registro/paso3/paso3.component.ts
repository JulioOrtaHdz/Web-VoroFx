import { Component, ComponentFactoryResolver, OnInit, AfterViewInit } from '@angular/core';
import { countries } from './country-data-store';
import { CryptoServiceService } from 'src/app/services/crypto-service.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Modal } from 'src/app/utils/classes/modal.class';
import { CanComponentDeactive } from 'src/app/guards/salir-registro.guard';
import { VorofxService } from 'src/app/services/vorofx.service';
import { LangToggleService } from 'src/app/services/lang-toggle.service';

declare function ChangeLangLocalize(lang: string): any;

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.component.html',
  styleUrls: ['./paso3.component.css']
})
export class Paso3Component extends Modal implements OnInit, AfterViewInit, CanComponentDeactive {

  // AUXILIARES PARA LA VISTA
  public load = false;
  lang = localStorage.getItem("ljs-lang") || "es";

  // LISTA DE PAÍSES A MOSTRAR EN ELEMENTO "SELECT"
  countries: any = countries;

  // VALORES TRAIDOS POR DEVOLVER A LA VISTA
  dataEncrypt = localStorage.getItem('user') || '';
  user = this.crypto.decrypt(this.dataEncrypt) || '{}';

  datosPasoAnterior = JSON.parse(this.user || '{}');

  token = localStorage.getItem('tokenRegister') || '';

  // CONTROLES DE FORMULARIO
  pais = new FormControl(this.datosPasoAnterior.country || '', [
    Validators.required
  ]);
  direccion = new FormControl(this.datosPasoAnterior.direction || '', [
    Validators.required
  ]);
  exterior = new FormControl(this.datosPasoAnterior.external || '', [
    Validators.required,
    // Se requiere al menos un número
    this.regexValidator(new RegExp(/^\d*$/), {
      'number': {
        'requiredPattern': 'Número'
      }
    }, 'number'),
  ]);
  postal = new FormControl(this.datosPasoAnterior.postal || '', [
    Validators.required,
    // Se requiere al menos un número
    this.regexValidator(new RegExp(/^\d*$/), {
      'number': {
        'requiredPattern': 'Número'
      }
    }, 'number'),
  ]);
  estado = new FormControl(this.datosPasoAnterior.state || '', [
    Validators.required
  ]);
  ciudad = new FormControl(this.datosPasoAnterior.city || '', [
    Validators.required
  ]);

  // CONSTRUCTOR DEL FORMULARIO
  formDireccion = new FormGroup({
    country: this.pais,
    direction: this.direccion,
    external: this.exterior,
    postal: this.postal,
    state: this.estado,
    city: this.ciudad
  });

  constructor(
    private crypto: CryptoServiceService,
    private router: Router,
    public resolve: ComponentFactoryResolver,
    private vorofx: VorofxService,
    private toggleLang: LangToggleService) {
    super(resolve);
    console.log(this.formDireccion.value.country)
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  cambio(data: any) {
    // console.log(data.value);
    // console.log(data.value?.name || 'nada');
  }

  onSubmit() {
    this.load = true;
    let user = this.datosPasoAnterior = Object.assign(this.datosPasoAnterior, this.formDireccion.value);
    user = JSON.stringify(user);
    const userCrypt = this.crypto.encrypt(user);
    localStorage.setItem("user", userCrypt);
    localStorage.setItem("step", "3");

    this.formDireccion.value.token = this.token;

    this.vorofx.step3(this.formDireccion.value).subscribe(
      (data) => this.handdleResponse(data),
      (error) => this.handdleError(error)
    );
  }

  handdleResponse(data: any) {
    localStorage.setItem("tokenRegister", data.token);
    this.load = false;
    this.router.navigate(['/registrarse/paso_4']);
  }

  handdleError(error: any) {
    console.log(typeof error.error);
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


  // VALIDADORES PERSONALIZADOS
  regexValidator(regex: RegExp, error: ValidationErrors, name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;
      error[name].actualValue = value;
      return regex.test(value) ? null : error;
    };
  }

  iCanGoOut(): boolean {
    let flag = true;
    Object.keys(this.formDireccion.controls).forEach(key => {
      if (flag) {
        flag = (this.formDireccion.controls[key].errors && this.formDireccion.touched && this.formDireccion.controls[key].value) || (this.formDireccion.controls[key].value && this.formDireccion.touched) ? false : true;
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
