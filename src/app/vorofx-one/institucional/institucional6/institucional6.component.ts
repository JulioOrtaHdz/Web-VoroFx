import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VorofxService } from 'src/app/services/vorofx.service';
declare var $:any;
@Component({
  selector: 'app-institucional6',
  templateUrl: './institucional6.component.html',
  styleUrls: ['./institucional6.component.css']
})
export class Institucional6Component implements OnInit, OnDestroy, AfterViewInit {

  languages: string[] = [
    'Español',
    'Ingles',
  ];

  show:boolean = false;
  msj:boolean = false;

  language:any;

  public form = {
    name: null,
    email: null,
    country: 'México',
    dialCode: '52',
    phone: null,
    language: null,
    telegram: null,
    msj: null,
  };



  public error: any = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private Axin: VorofxService,
    private router: Router
  ) { }



  onCountryChange(event: any) {
   this.form.country = event.name;
   this.form.dialCode = event.dialCode;
  }

  lang() {
    this.language = this.document.querySelector('#lang2');
    this.form.language = this.language.value;
  }

  ngAfterViewInit() {
    this.language.addEventListener('input', this.lang.bind(this));
  }


  onSubmit() {
    this.show = true;

    this.Axin.contact(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    this.show = false;
    this.msj = true;
    this.reset();
  }

  handleError(error: any) {
    this.error = error.error.errors;
    this.show = false;
  }

  reset() {
    this.form.name = null;
    this.form.email = null;
    this.form.phone = null;
    this.form.language = null;
    this.form.telegram = null;
    this.form.msj = null;
  }

  ngOnInit(): void {
    this.language = this.document.querySelector('#lang');
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {


  }
}
