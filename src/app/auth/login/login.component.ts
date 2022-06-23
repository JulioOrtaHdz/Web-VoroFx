import { Component, HostListener, OnDestroy, OnInit, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { AxinService } from 'src/app/services/vorofx.service';
import { CanonicalService } from 'src/app/services/canonical.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { environment } from 'src/environments/environment';

import { DOCUMENT } from '@angular/common';
import { RecaptchaComponent, RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { LangToggleService } from 'src/app/services/lang-toggle.service';

declare function ChangeLangLocalize(lang: any): any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {

  public load = false;
  public hidePassword = true;

  public token: string | undefined;

  loginForm: any;
  private baseUrl = environment.url_login;

  // TRADUCTOR
  public lang = localStorage.getItem("ljs-lang") || 'es';
  public hidden: boolean = false;
  tittle = "Ingresar | Axin Capital";

  
  html: any;
  body: any;


  private buildForm(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      captcha: [null, [Validators.required]]
    });

  }

  public error = null;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private formBuilder: FormBuilder,
    private Axin: AxinService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    private title: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService,
    private translateService: TranslateService,
    private toggleLang: LangToggleService
  ) {
    this.token = undefined;
    this.translateService.addLangs(['es', 'en']);
    this.translateService.setDefaultLang('es');
    this.canonicalService.setCanonicalURL();

    this.tittle = this.lang == "es" ? "Ingresar | Axin Capital" : "Login | Axin Capital";
    this.title.setTitle(this.tittle);

    this.metaTagService.updateTag({ name: 'description', content: 'Inicia sesión en la plataforma ideal para invertir en dólares y hacer crecer tu dinero.' });
    // this.metaTagService.updateTag({ name: 'keywords', content: 'El mito del emprendedor de Michael Gerber, 5 errores de los emprendedores principiantes y cómo evitarlos'})
    this.metaTagService.updateTag({ property: 'og:title', content: 'Ingresar | Axin Capital' });
    this.metaTagService.updateTag({ property: 'og:image', content: "https://axincapital.com/assets/img/screenshot.png" });
    this.metaTagService.updateTag({ property: 'og:description', content: 'Inicia sesión en la plataforma ideal para invertir en dólares y hacer crecer tu dinero.' });
    this.metaTagService.updateTag({ name: "twitter:title", content: 'Ingresar | Axin Capital' });
    this.metaTagService.updateTag({ name: "twitter:description", content: 'Inicia sesión en la plataforma ideal para invertir en dólares y hacer crecer tu dinero.' });
    this.metaTagService.updateTag({ name: "twitter:image", content: "https://axincapital.com/assets/img/screenshot.png" });
    !this.lang ? this.lang = "es" : false;
  }

  onSubmit() {
    this.load = true;
    this.Axin.login(this.loginForm.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    const token = data.token_login;
    console.log(data);
    if (data.A2F == true) {
      console.log("2f activado");
      localStorage.setItem("tokenA2f", token);
      localStorage.setItem("typeA2f", data.type2fa);
      localStorage.setItem('telefono', data.numero.telefono || "");
      localStorage.setItem('extension', data.numero.extension || "");

      this.router.navigateByUrl('/login-a2f/'+token);

    } else {

      window.location.href = this.baseUrl + data.token_login;
    }
  }

  handleError(error: any) {
    console.log(error);
    this.error = error.error.error;
    grecaptcha.reset();
    this.token = undefined;


    if (this.error == 'Por favor comunícate con nuestro centro de atención.') {
      Swal.fire({
        html:
          '<style> .swal2-popup { padding: 0!important; border-radius: 25px!important; } .swal2-content { padding: initial!important;} .swal2-actions {height: 82px; } .swal2-styled.swal2-confirm {border: 0;border-radius: 16px!important;background: initial;background-color: #1f4cf4;color: #fff;font-size: 1.0625em;} .swal2-styled.swal2-cancel {border: 0;border-radius: 16px;background: initial;background-color: #cacbcf;color: #fff;font-size: 1.0625em;}</style>' +
          '<div style="background:#fbeeef; padding-top: 47px; margin:0; border-top-left-radius: 25px!important; border-top-right-radius: 25px!important;">' +
          '</div> ' +
          '<img loading="lazy" style="width: 50px; height: auto; margin-top: 25px;" src="https://axincapital.com/assets/img/icopass.png" alt="error">' +
          '<h1 style="font-size:1.5rem; font-weight: bold; margin-bottom: 2rem;">!Aviso!</h1>' +
          '<div style="background:#ffffff!important; padding-top: 27px; margin:0; border-top-left-radius: 25px!important; border-top-right-radius: 25px!important;">' +
          '<h1 style="font-size:1rem; font-weight: bold;">Se inhabilito tu cuenta por que infrige nuestras condiciones. <br/> Solicita más información para recibir ayuda.</h1>',

        reverseButtons: true,
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Más información',

      }).then((result) => {
        if (result.value) {
          this.router.navigateByUrl('/comunicate');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          this.router.navigateByUrl('/inicio_de_sesion');
        }
      });
    }else if(error.status != 401){
      Swal.fire({
        html:
          '<style> .swal2-popup { padding: 0!important; border-radius: 25px!important; } .swal2-content { padding: initial!important;} .swal2-actions {height: 82px; } .swal2-styled.swal2-confirm {border: 0;border-radius: 16px!important;background: initial;background-color: #1f4cf4;color: #fff;font-size: 1.0625em;} .swal2-styled.swal2-cancel {border: 0;border-radius: 16px;background: initial;background-color: #cacbcf;color: #fff;font-size: 1.0625em;}</style>' +
          '<div style="background:#fbeeef; padding-top: 47px; margin:0; border-top-left-radius: 25px!important; border-top-right-radius: 25px!important;">' +
          '</div> ' +
          '<img loading="lazy" style="width: 50px; height: auto; margin-top: 25px;" src="https://axincapital.com/assets/img/icopass.png" alt="error">' +
          '<h1 style="font-size:1.5rem; font-weight: bold; margin-bottom: 2rem;">!Aviso!</h1>' +
          '<div style="background:#ffffff!important; padding-top: 27px; margin:0; border-top-left-radius: 25px!important; border-top-right-radius: 25px!important;">' +
          '<h1 style="font-size:1rem; font-weight: bold;"> Este espacio se encuentra en mantenimiento. <br> En breve estará disponible nuevamente.</h1>',

        reverseButtons: true,
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Más información',

      }).then((result) => {
        if (result.value) {
          this.router.navigateByUrl('/comunicate');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          this.router.navigateByUrl('/inicio_de_sesion');
        }
      });
    }
    this.load = false;

  }

  ngOnInit(): void {

    // this.selectLangContent = this.document.querySelectorAll(".lang_content");
    // this.btnLang = this.document.querySelectorAll(".lang_change")
    // this.optionsLang = this.document.querySelectorAll(".options_lang");
    // this.btnEnlaceLang = this.document.getElementById("switch");

    this.load = false;
    this.hidePassword = true;
    this.buildForm();

    this.toggleLang.change.subscribe(idioma => {
      this.tittle = idioma == 'es' ? "Ingresar | Axin Capital" : "Login | Axin Capital";
      this.title.setTitle(this.tittle);
    });
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {


  }

  ngAfterViewInit(){
    
    this.html = this.document.querySelector('html');
    this.body = this.document.querySelector('body');

    this.html.style.overflow = 'auto';
    this.html.style.height = 'auto';
    this.body.style.overflow = 'auto';
    this.body.style.height = 'auto';
  }



  closeMenu(event: Event) {
    console.log(event.target);
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
