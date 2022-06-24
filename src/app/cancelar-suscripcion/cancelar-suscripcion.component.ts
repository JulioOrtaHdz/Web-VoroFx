import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { VorofxService } from 'src/app/services/vorofx.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancelar-suscripcion',
  templateUrl: './cancelar-suscripcion.component.html',
  styleUrls: ['./cancelar-suscripcion.component.css']
})
export class CancelarSuscripcionComponent implements OnInit {

  email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  ]);

  public load = false;

  correo: string|null;

  form = new FormGroup({
    email: this.email
  })

  constructor(private vorofxServices: VorofxService, private router: Router, private activateRoute: ActivatedRoute) {
    this.correo = this.activateRoute.snapshot.paramMap.get('correo');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Subiste");
    const mail = this.form.value;
    this.load = true;
    this.vorofxServices.vorofxDesubscription(mail).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    console.log(data);
    this.router.navigateByUrl('/cancelado');
    this.load = false;
  }

  handleError(error: any) {
    console.log(error);
    this.router.navigateByUrl('/cancelado');
    this.load = false;
  }

  mensaje(mensaje: any) {
    Swal.fire({
      html:
        '<style> .swal2-popup { padding: 0!important; border-radius: 25px!important; } .swal2-content { padding: initial!important;} .swal2-actions {height: 82px; } .swal2-styled.swal2-confirm {border: 0;border-radius: 16px!important;background: initial;background-color: #1f4cf4;color: #fff;font-size: 1.0625em;} .swal2-styled.swal2-cancel {border: 0;border-radius: 16px;background: initial;background-color: #cacbcf;color: #fff;font-size: 1.0625em;}</style>' +
        '<div style="background:#fbeeef; padding-top: 47px; margin:0; border-top-left-radius: 25px!important; border-top-right-radius: 25px!important;">' +
        '</div> ' +
        '<img loading="lazy" style="width: 50px; height: auto; margin-top: 25px;" src="https://axincapital.com/assets/img/home-Axin-08.png" alt="error">' +
        '<h1 style="font-size:1.5rem; font-weight: bold; margin-bottom: 2rem;">!Aviso!</h1>' +
        '<div style="background:#ffffff!important; padding-top: 27px; margin:0; border-top-left-radius: 25px!important; border-top-right-radius: 25px!important;">' +
        '<h1 style="font-size:1rem; font-weight: bold;">'+mensaje+'.</h1>',

      showConfirmButton: true,
      confirmButtonText: 'Aceptar',

    }).then((result) => {
      if (result.value) {
        this.router.navigateByUrl('/cancelado');
      } else if (result.isDismissed === true) {
        this.router.navigateByUrl('/cancelado');
      }
      console.log(result);
    });
  }

}
