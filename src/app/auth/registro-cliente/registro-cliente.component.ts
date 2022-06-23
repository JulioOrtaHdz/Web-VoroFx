import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { AxinService } from '../../services/vorofx.service';
import { TokenService } from '../../services/token.service';
import { EmailService } from '../../services/email.service';
import { Correo } from '../../correo.model';
import { CanonicalService } from 'src/app/services/canonical.service';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DatePipe, DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css'],
  providers: [DatePipe]
})
export class RegistroClienteComponent implements OnInit, OnDestroy {

  public load = false;
  public hidePassword = true;
  public hideConfirm = true;
  // public country = 'Mexico (México)';
  public dialCode = 52;
  public maxDate: any;

  public token: string | undefined;

  correos: Correo[] = [];
  prueba: any;
  empresarial: boolean = false;
  personal: boolean = false;

  signupForm: any;

  // TRADUCTOR
  public lang = localStorage.getItem("ljs-lang");
  selectLangContent: any;
  optionsLang: any;
  btnLang: any;
  public hidden: boolean = false;
  btnEnlaceLang: any;

  public email = '';


  html: any;
  body: any;

  private buildForm(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      first_last_name: ['', [Validators.required]],
      second_last_name: ['', [Validators.required]],
      birth_date: ['', [Validators.required]],
      number_phone: ['', [Validators.required, Validators.pattern('^[0-9]+'), Validators.maxLength(15)]],
      // birth_date_country: [this.country, ],
      country_code: [this.dialCode ? this.dialCode : '52',],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$")]],
      // password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$¡¿!%*.#/+-|°,><_)(?&])[0-9A-Za-z\d$@$¡¿!%*.#/+-|°,><_)(?&].{8,}')]],
      // password_confirmation: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      terms: ['', [Validators.required]],
      captcha: [null, [Validators.required]]
    });
  }

  //#/.+-|°,

  onCountryChange(event: any) {
    //  this.country = event.name;
    this.dialCode = event.dialCode;
    //  console.log(this.country)
    console.log(this.dialCode)
  }

  public error: any = [];
  public err: any;
  public update: any;
  id: any;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private Axin: AxinService,
    private Subscription: AxinService,
    private Token: TokenService,
    private router: Router,
    private emailService: EmailService,
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private metaTagService: Meta, private canonicalService: CanonicalService
  ) {
    this.token = undefined;

    this.canonicalService.setCanonicalURL();

    this.title.setTitle('Registro | Axin Capital');

    this.metaTagService.updateTag({ name: 'description', content: 'Regístrate y comienza a cumplir con todos tus objetivos a través de una inversión inteligente.' });
    // this.metaTagService.updateTag({ name: 'keywords', content: 'El mito del emprendedor de Michael Gerber, 5 errores de los emprendedores principiantes y cómo evitarlos'})
    this.metaTagService.updateTag({ property: 'og:title', content: 'Registro | Axin Capital' });
    this.metaTagService.updateTag({ property: 'og:image', content: "https://axincapital.com/assets/img/screenshot.png" });
    this.metaTagService.updateTag({ property: 'og:description', content: 'Regístrate y comienza a cumplir con todos tus objetivos a través de una inversión inteligente.' });
    this.metaTagService.updateTag({ name: "twitter:title", content: 'Registro | Axin Capital' });
    this.metaTagService.updateTag({ name: "twitter:description", content: 'Regístrate y comienza a cumplir con todos tus objetivos a través de una inversión inteligente.' });
    this.metaTagService.updateTag({ name: "twitter:image", content: "https://axincapital.com/assets/img/screenshot.png" });

    this.activatedRoute.params.subscribe(params => {
      this.email = params.id;

    });
    !this.lang ? this.lang = "es" : false;
  }

  onSubmit() {
    this.signupForm.value.country_code = this.dialCode;
    this.signupForm.value.birth_date = this.datePipe.transform(this.signupForm.value.birth_date, 'yyyy-MM-dd');
    this.load = true;

    this.Axin.signup(this.signupForm.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

    this.Subscription.vorofxSubscription(this.signupForm.value).subscribe(res => {
      console.log(res);
      console.log(this.signupForm.value);
    }, err => {
      console.log(err);
      console.log(this.signupForm.value);
    });
  }

  handleResponse(data: any) {
    this.Token.handle(data.access_token);
    console.log(data);
    this.router.navigateByUrl('/verificacion_de_cuenta');
  }


  handleError(error: any) {
    console.log(error);
    this.load = false;
    if (error.status != 401) {
      Swal.fire({
        html:
          '<style> .swal2-popup { padding: 0!important; border-radius: 25px!important; } .swal2-content { padding: initial!important;} .swal2-actions {height: 82px; } .swal2-styled.swal2-confirm {border-radius:25px}</style>' +
          '<div style="border-bottom: 2px solid red; background:#fbeeef; padding-top: 27px; margin:0; border-top-left-radius: 25px!important; border-top-right-radius: 25px!important;">' +
          '<img loading="lazy" style="width: 60px; height: auto;" src="https://axincapital.com/assets/img/icopass.png" alt="error">' +
          '<h1 style="font-size:1.5rem; font-weight: bold; margin-bottom: 2rem;">¡Aviso!</h1>' +
          '</div> ' +
          '<div style="background:#ffffff!important; padding-top: 27px; margin:0; border-top-left-radius: 25px!important; border-top-right-radius: 25px!important;">' +
          '<h1 style="font-size:1rem; font-weight: bold;">Este espacio se encuentra en mantenimiento. En breve estará disponible nuevamente.</h1>',

        showCancelButton: false,
        confirmButtonText: 'Reintentar',
        cancelButtonText: ''
      }).then((result) => {
        if (result.value) {
          this.router.navigateByUrl('/home');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          this.router.navigateByUrl('/home');
        }
      });
    }
    console.log(error);
    this.error = error.error.error;
    grecaptcha.reset();
    this.token = undefined;
  }

  account(event: Event) {

    var radioOne = <HTMLInputElement>this.document.getElementById('personal');
    var radioTwo = <HTMLInputElement>this.document.getElementById('empresarial');
    var isCheckedRadioOne = radioOne.checked;
    var isCheckedRadioTwo = radioTwo.checked;
    if (isCheckedRadioOne) {
      this.router.navigateByUrl('/registro');
    } else if (isCheckedRadioTwo) {
      this.router.navigateByUrl('/registro_socio');
    }
  }

  ngOnInit(): void {

    this.selectLangContent = this.document.querySelectorAll(".lang_content");
    this.btnLang = this.document.querySelectorAll(".lang_change")
    this.optionsLang = this.document.querySelectorAll(".options_lang");
    this.btnEnlaceLang = this.document.getElementById("switch");


    // this.country = 'Mexico (México)';
    this.dialCode = 52;
    this.hidePassword = true;
    this.hideConfirm = true;
    this.load = false;
    this.buildForm();
    this.correos = this.emailService.correos;
    if (Object.keys(this.correos).length) {
      this.email = this.correos[this.correos.length - 1].correo;
      // this.signupForm.value.email = this.correos[0].correo;
    }


    const date = new Date();
    const fullyear = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();

    const year = fullyear - 18;

    console.log(year, month, day);
    this.maxDate = new Date(year, month, day);

  }

  @HostListener('unloaded')
  ngOnDestroy(): void {


  }

  ngAfterViewInit() {

    this.html = this.document.querySelector('html');
    this.body = this.document.querySelector('body');

    this.html.style.overflow = 'auto';
    this.html.style.height = 'auto';
    this.body.style.overflow = 'auto';
    this.body.style.height = 'auto';
  }



  // TRADUCTOR
  openLangMenu() {
    for (var i = 0; i < this.optionsLang.length; i++) {
      this.optionsLang[i].classList.toggle("hidden");
    }
  }

  changeLang(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.value;
    this.lang = value;
    if (element) {
      for (var i = 0; i < this.btnLang.length; i++) {
        this.btnLang[i].innerHTML = `
          <span>${value}</span><i class="ml-1 fas fa-chevron-down"></i>
        `;
        let aux = this.btnEnlaceLang as HTMLButtonElement;
        aux.click();
      }
    }

    for (var i = 0; i < this.optionsLang.length; i++) {
      this.optionsLang[i].classList.toggle("hidden");
    }
  }
}
