import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { VorofxService } from 'src/app/services/vorofx.service';

import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

import { timer } from 'rxjs';

@Component({
  selector: 'app-login-a2f',
  templateUrl: './login-a2f.component.html',
  styleUrls: ['./login-a2f.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginA2fComponent implements OnInit {

  segundos = 300;
  tiempo = timer(0, 1000);
  clock: any;
  tiempoAgotado = false;

  public tiempoHTML = "5:00";

  private token: string | null;

  private tokenUrl: string | null;

  private baseUrl = environment.url_login;

  load = false;
  error = null;

  public type2fa = Number(localStorage.getItem("typeA2f")) | 0;

  public telefono = localStorage.getItem('telefono');
  public extension = localStorage.getItem('extension');

  public numeroPublico = "";

  codigoA2f = new FormControl('', [
    Validators.required,
    Validators.pattern(/^([a-zA-Z0-9]){1,16}$/),
    Validators.minLength(6),
    Validators.maxLength(6)
  ]);

  form: any;

  constructor(private route: ActivatedRoute, private redirectCom: Router, private Axin: VorofxService) {

    this.token = localStorage.getItem("tokenA2f");

    this.tokenUrl = this.route.snapshot.paramMap.get('token');

    localStorage.removeItem("tokenA2f");
    localStorage.removeItem("typeA2f");
    localStorage.removeItem("telefono");
    localStorage.removeItem("extension");

    const aux = new FormControl(this.token, [Validators.required]);

    this.form = new FormGroup({
      a2fCode: this.codigoA2f,
      loginToken: aux
    })
  }

  ngOnInit(): void {

    if (this.token == null) {
      this.modal('El token es invalido, por favor verifique sus credenciales.');
    }

    if (this.type2fa) {
      for (var i = 0; i < this.telefono!.length; i++) {
        this.numeroPublico += this.telefono!.length - 4 > i ? '*' : this.telefono![i];
      }
      this.contador();
    }
  }

  onSubmit() {
    this.load = true;
    console.log(this.form.value);

    this.Axin.login2fact(this.form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

  handleResponse(data: any) {
    window.location.href = this.baseUrl + data.token_login;
  }

  handleError(error: any) {
    this.error = error.error.error;
    if (error.status != 401) {
      this.modal('Este espacio se encuentra en mantenimiento. En breve estará disponible nuevamente.');
    }
    this.load = false;
    console.log(error);
  }

  resetError() {
    this.error = null;
  }

  modal(message: any) {
    Swal.fire({
      html:
        '<style> .swal2-popup { padding: 0!important; border-radius: 25px!important; } .swal2-content { padding: initial!important;} .swal2-actions {height: 82px; } .swal2-styled.swal2-confirm {border-radius:25px}</style>' +
        '<div style="border-bottom: 2px solid red; background:#fbeeef; padding-top: 27px; margin:0; border-top-left-radius: 25px!important; border-top-right-radius: 25px!important;">' +
        '<img loading="lazy" style="width: 60px; height: auto;" src="https://axincapital.com/assets/img/icopass.png" alt="error">' +
        '<h1 style="font-size:1.5rem; font-weight: bold; margin-bottom: 2rem;">¡Aviso!</h1>' +
        '</div> ' +
        '<div style="background:#ffffff!important; padding-top: 27px; margin:0; border-top-left-radius: 25px!important; border-top-right-radius: 25px!important;">' +
        '<h1 style="font-size:1rem; font-weight: bold;">' + message + '.</h1>',

      showCancelButton: false,
      confirmButtonText: 'Volver',
      cancelButtonText: ''
    }).then((result) => {
      if (result.value) {
        this.redirectCom.navigateByUrl('/inicio_de_sesion');
      } else if (result.isDismissed === true) {
        this.redirectCom.navigateByUrl('/inicio_de_sesion');
      }
      console.log(result);
    });
  }

  contador() {
    this.tiempoAgotado = false;
    this.segundos = 300;
    this.clock = this.tiempo.subscribe(t => {
      if (this.segundos == 0) {
        this.tiempoAgotado = true;
        this.clock.unsubscribe();
      } else {
        console.log("Tiempo");
        this.segundos--;
        let min = Math.trunc(Number(this.segundos / 60));
        let sec = Number(this.segundos % 60);
        let tiempo = `${this.formatoTiempo(min)}:${this.formatoTiempo(sec)}`;
        this.tiempoHTML = tiempo;
      }
    });
  }

  formatoTiempo(tiempo: number) {
    return tiempo < 10 ? "0" + tiempo : tiempo;
  }

  ngOnDestroy() {
    if (this.clock) {
      this.clock.unsubscribe();
    }
  }

  reenviarMensaje() {
    let token = {
      "token": this.form.value.loginToken
    }

    this.Axin.resendCode(token).subscribe(
      data => this.contador(),
      error => console.log(error)
    );
  }

}
