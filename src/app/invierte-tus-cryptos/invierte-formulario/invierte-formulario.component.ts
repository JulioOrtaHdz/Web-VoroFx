import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { VorofxService } from 'src/app/services/vorofx.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-invierte-formulario',
  templateUrl: './invierte-formulario.component.html',
  styleUrls: ['./invierte-formulario.component.css']
})
export class InvierteFormularioComponent implements OnInit {

  public modalOpen: boolean = false;
  modal: any;

  is_loading = false;

  code = 52;

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);

  email = new FormControl('', [
    Validators.email,
    Validators.required,
    Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  ]);

  phone = new FormControl('', [
    Validators.required,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    Validators.maxLength(10),
    Validators.minLength(5)
  ]);

  country = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  last_name = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  country_code = new FormControl('52',);

  form = new FormGroup({
    name: this.name,
    last_name: this.last_name,
    email: this.email,
    phone: this.phone,
    country_code: this.country_code,
    country: this.country
  });

  constructor(@Inject(DOCUMENT) private document: Document, private vorofxServices: VorofxService) {

  }

  ngOnInit(): void {
    this.modal = this.document.getElementsByClassName("modal_container")[0];
  }

  onSubmit(e: Event) {
    this.is_loading = true;

    this.form.value.country_code = this.code;


    this.vorofxServices.invierteTusCryptos(this.form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )

    this.vorofxServices.vorofxSubscriptionCryptos(this.form.value).subscribe(
      res => console.log(res),
      err => console.log(err)
    );

    console.log(this.form.value);
  }

  handleResponse(data: any) {
    this.modalOpen = true;
    setTimeout(() => this.modalOpen = false, 5000);
    this.is_loading = false;
    console.log(data);

    this.form.reset();
  }


  handleError(error: any) {
    this.is_loading = false;
    // this.modalOpen = true;
    // setTimeout(()=> this.modalOpen = false, 5000);

    console.log("Habilitado: ", this.is_loading);
    console.log(error);
    Swal.fire('Axin Capital', '¡No se ha podido enviar la información intentelo de nuevo!', 'error');
  }


  toggleModal(e: Event) {
    e.stopImmediatePropagation();
    let node = e.target as HTMLElement;
    if (node.classList.contains("modal_container") || node.classList.contains("close_icon")) {
      this.modalOpen = !this.modalOpen;
    }
  }

  onCountryChange(e: any) {
    this.code = e.dialCode;
  }

}
