import { DatePipe } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Correo } from 'src/app/correo.model';
import { AuthService } from 'src/app/services/auth.service';
import { VorofxService } from 'src/app/services/vorofx.service';
import { CanonicalService } from 'src/app/services/canonical.service';
import { EmailService } from 'src/app/services/email.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit, OnDestroy {
  public load = false;
  public hidePassword = true;
  public hideConfirm = true;
  public token = '';

  correos: Correo[] = [];


  changePasswordForm: any;


  private buildForm(): void {
    this.changePasswordForm = this.formBuilder.group({

      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$¡¿!%*.#/+-|°,><_)(?&])[0-9A-Za-z\d$@$¡¿!%*.#/+-|°,><_)(?&].{8,}')]],
      password_confirmation: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$¡¿!%*.#/+-|°,><_)(?&])[0-9A-Za-z\d$@$¡¿!%*.#/+-|°,><_)(?&].{8,}')]],

    });
  }



  public error: any = [];
  public err: any;
  public update: any;
  id : any;

  constructor(
    private formBuilder: FormBuilder,
    private Axin: VorofxService,
    private router: Router,
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private metaTagService: Meta, private canonicalService: CanonicalService
    ) {
      this.canonicalService.setCanonicalURL();

      this.title.setTitle('Cambiar contraseña | Axin Capital');

      this.metaTagService.updateTag({ name: 'description',content: 'Regístrate y comienza a cumplir con todos tus objetivos a través de una inversión inteligente.' });
      // this.metaTagService.updateTag({ name: 'keywords', content: 'El mito del emprendedor de Michael Gerber, 5 errores de los emprendedores principiantes y cómo evitarlos'})
      this.metaTagService.updateTag({ property: 'og:title', content: 'Registro | Axin Capital' });
      this.metaTagService.updateTag({ property: 'og:image', content: "https://axincapital.com/assets/img/screenshot.png" });
      this.metaTagService.updateTag({ property: 'og:description',content: 'Regístrate y comienza a cumplir con todos tus objetivos a través de una inversión inteligente.' });
      this.metaTagService.updateTag({ name:"twitter:title", content: 'Registro | Axin Capital' });
      this.metaTagService.updateTag({ name:"twitter:description", content: 'Regístrate y comienza a cumplir con todos tus objetivos a través de una inversión inteligente.' });
      this.metaTagService.updateTag({ name:"twitter:image", content: "https://axincapital.com/assets/img/screenshot.png" });

      this.activatedRoute.params.subscribe(params => {
        /* console.log(params.id); */
        console.log(params.id);
        this.token = params.id;

      });
    }

  onSubmit() {
    this.changePasswordForm.value.token = this.token;
    this.load = true;
    console.log(this.changePasswordForm.value);
    this.Axin.changePassword(this.changePasswordForm.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    this.router.navigateByUrl('/inicio_de_sesion');
  }


  handleError(error: any) {
    this.error = error.error.error;
    this.load = false;
  }



  ngOnInit(): void {

    this.hidePassword = true;
    this.hideConfirm = true;
    this.load = false;
    this.buildForm();

  }

  @HostListener('unloaded')
  ngOnDestroy(): void {


  }

}
