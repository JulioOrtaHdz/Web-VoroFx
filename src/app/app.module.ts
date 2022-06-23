import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AxinOneComponent } from './vorofx-one/vorofx-one.component';
import { RentaFijaComponent } from './vorofx-one/renta-fija/renta-fija.component';
import { RentaFija1Component } from './vorofx-one/renta-fija/renta-fija1/renta-fija1.component';
import { RentaFija2Component } from './vorofx-one/renta-fija/renta-fija2/renta-fija2.component';
import { RentaFija3Component } from './vorofx-one/renta-fija/renta-fija3/renta-fija3.component';
import { RentaFija4Component } from './vorofx-one/renta-fija/renta-fija4/renta-fija4.component';
import { RentaFija5Component } from './vorofx-one/renta-fija/renta-fija5/renta-fija5.component';
import { RentaFija6Component } from './vorofx-one/renta-fija/renta-fija6/renta-fija6.component';
import { RentaVariableComponent } from './vorofx-one/renta-variable/renta-variable.component';
import { RentaVariable1Component } from './vorofx-one/renta-variable/renta-variable1/renta-variable1.component';
import { RentaVariable2Component } from './vorofx-one/renta-variable/renta-variable2/renta-variable2.component';
import { RentaVariable3Component } from './vorofx-one/renta-variable/renta-variable3/renta-variable3.component';
import { RentaVariable4Component } from './vorofx-one/renta-variable/renta-variable4/renta-variable4.component';
import { RentaVariable5Component } from './vorofx-one/renta-variable/renta-variable5/renta-variable5.component';
import { RentaVariable6Component } from './vorofx-one/renta-variable/renta-variable6/renta-variable6.component';
import { HomeComponent } from './vorofx-one/home/home.component';
import { Home1Component } from './vorofx-one/home/home1/home1.component';
import { Home2Component } from './vorofx-one/home/home2/home2.component';
import { Home3Component } from './vorofx-one/home/home3/home3.component';
import { Home4Component } from './vorofx-one/home/home4/home4.component';
import { Home5Component } from './vorofx-one/home/home5/home5.component';
import { FooterComponent } from './footer/footer.component';
import { AxinTwoComponent } from './vorofx-two/vorofx-two.component';
import { ComunicateComponent } from './vorofx-two/comunicate/comunicate.component';
import { FaqComponent } from './vorofx-two/faq/faq.component';
import { PoliticaRetiroComponent } from './vorofx-two/politica-retiro/politica-retiro.component';
import { PoliticaAmlComponent } from './vorofx-two/politica-aml/politica-aml.component';
import { PrivacidadComponent } from './vorofx-two/privacidad/privacidad.component';
import { TerminosComponent } from './vorofx-two/terminos/terminos.component';
import { ActivationTokenComponent } from './auth/activation-token/activation-token.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroSocioComponent } from './auth/registro-socio/registro-socio.component';
import { RegistroClienteComponent } from './auth/registro-cliente/registro-cliente.component';
import { ResetConfirmacionComponent } from './auth/reset-confirmacion/reset-confirmacion.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SolicitudPasswordComponent } from './auth/solicitud-password/solicitud-password.component';
import { CommonModule, HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { InstitucionalComponent } from './vorofx-one/institucional/institucional.component';
import { Institucional1Component } from './vorofx-one/institucional/institucional1/institucional1.component';
import { Institucional2Component } from './vorofx-one/institucional/institucional2/institucional2.component';
import { Institucional3Component } from './vorofx-one/institucional/institucional3/institucional3.component';
import { Institucional4Component } from './vorofx-one/institucional/institucional4/institucional4.component';
import { Institucional5Component } from './vorofx-one/institucional/institucional5/institucional5.component';
import { Institucional6Component } from './vorofx-one/institucional/institucional6/institucional6.component';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { BeneficiosComponent } from './vorofx-two/beneficios/beneficios.component';

import { TestComponent } from './test/test.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { CambiarPasswordComponent } from './auth/cambiar-password/cambiar-password.component';
import { High1Component } from './vorofx-three/high-frecuency-trading/high1/high1.component';
import { High2Component } from './vorofx-three/high-frecuency-trading/high2/high2.component';
import { High3Component } from './vorofx-three/high-frecuency-trading/high3/high3.component';
import { AxinThreeComponent } from './vorofx-three/vorofx-three.component';
import { InvierteTuRealidadComponent } from './vorofx-three/invierte-tu-realidad/invierte-tu-realidad.component';
import { FooterLandComponent } from './vorofx-three/footer-land/footer-land.component';
import { HighFrecuencyTradingComponent } from './vorofx-three/high-frecuency-trading/high-frecuency-trading.component';
import { Invierte1Component } from './vorofx-three/invierte-tu-realidad/invierte1/invierte1.component';
import { Invierte2Component } from './vorofx-three/invierte-tu-realidad/invierte2/invierte2.component';
import { ModalCalcularRendimientoComponent } from './vorofx-three/high-frecuency-trading/high2/modal-calcular-rendimiento/modal-calcular-rendimiento.component';
import { ModalConocerMasComponent } from './vorofx-three/high-frecuency-trading/high2/modal-conocer-mas/modal-conocer-mas.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Ebook1Component } from './vorofx-three/ebook/ebook1/ebook1.component';
import { Ebook2Component } from './vorofx-three/ebook/ebook2/ebook2.component';
import { Ebook3Component } from './vorofx-three/ebook/ebook3/ebook3.component';
import { EbookComponent } from './vorofx-three/ebook/ebook.component';
import { DownloadEbookComponent } from './vorofx-three/download-ebook/download-ebook.component';
import { Download1Component } from './vorofx-three/download-ebook/download1/download1.component';
import { DownloadComponent } from './vorofx-three/download/download.component';
import { DownloadEbook1Component } from './vorofx-three/download/download-ebook1/download-ebook1.component';
import { DownloadEbook2Component } from './vorofx-three/download/download-ebook2/download-ebook2.component';
import { DownloadEbook3Component } from './vorofx-three/download/download-ebook3/download-ebook3.component';
import { InvierteTusCryptosComponent } from './invierte-tus-cryptos/invierte-tus-cryptos.component';
import { InvierteHeaderComponent } from './invierte-tus-cryptos/invierte-header/invierte-header.component';
import { InvierteComoFuncionaComponent } from './invierte-tus-cryptos/invierte-como-funciona/invierte-como-funciona.component';
import { InvierteInversionistaComponent } from './invierte-tus-cryptos/invierte-inversionista/invierte-inversionista.component';
import { InvierteMercadoComponent } from './invierte-tus-cryptos/invierte-mercado/invierte-mercado.component';
import { InvierteFormularioComponent } from './invierte-tus-cryptos/invierte-formulario/invierte-formulario.component';
import { InvierteFooterComponent } from './invierte-tus-cryptos/invierte-footer/invierte-footer.component';

import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '../environments/environment';
import { CancelarSuscripcionComponent } from './cancelar-suscripcion/cancelar-suscripcion.component';
import { LoginA2fComponent } from './auth/login-a2f/login-a2f.component';
import { CanceladoComponent } from './cancelar-suscripcion/cancelado/cancelado.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { Paso2Component } from './auth/registro/paso2/paso2.component';
import { Paso1Component } from './auth/registro/paso1/paso1.component';
import { Paso3Component } from './auth/registro/paso3/paso3.component';
import { Paso4Component } from './auth/registro/paso4/paso4.component';
import { ModalComponent } from './utils/modal/modal.component';
import { ClickOutsideDirective } from './utils/directives/clickOutside.directive';
import { AboutUsComponent } from './vorofx-one/about-us/about-us.component';
import { UsOneComponent } from './vorofx-one/about-us/us-one/us-one.component';
import { UsTwoComponent } from './vorofx-one/about-us/us-two/us-two.component';
import { UsThreeComponent } from './vorofx-one/about-us/us-three/us-three.component';

import { WaveEffectDirective } from './utils/directives/waveEffect.directive';
import { UsFourComponent } from './vorofx-one/about-us/us-four/us-four.component';

@NgModule({
  declarations: [
    AppComponent,
    AxinOneComponent,
    RentaFijaComponent,
    RentaFija1Component,
    RentaFija2Component,
    RentaFija3Component,
    RentaFija4Component,
    RentaFija5Component,
    RentaFija6Component,
    RentaVariableComponent,
    RentaVariable1Component,
    RentaVariable2Component,
    RentaVariable3Component,
    RentaVariable4Component,
    RentaVariable5Component,
    RentaVariable6Component,
    HomeComponent,
    Home1Component,
    Home2Component,
    Home3Component,
    Home4Component,
    Home5Component,
    FooterComponent,
    AxinTwoComponent,
    ComunicateComponent,
    FaqComponent,
    PoliticaRetiroComponent,
    PoliticaAmlComponent,
    PrivacidadComponent,
    TerminosComponent,
    ActivationTokenComponent,
    LoginComponent,
    RegistroSocioComponent,
    RegistroClienteComponent,
    ResetConfirmacionComponent,
    ResetPasswordComponent,
    SolicitudPasswordComponent,
    InstitucionalComponent,
    Institucional1Component,
    Institucional2Component,
    Institucional3Component,
    Institucional4Component,
    Institucional5Component,
    Institucional6Component,
    BeneficiosComponent,
    PageNotFoundComponent,
    TestComponent,
    CambiarPasswordComponent,
    High1Component,
    High2Component,
    High3Component,
    AxinThreeComponent,
    InvierteTuRealidadComponent,
    HighFrecuencyTradingComponent,
    FooterLandComponent,
    Invierte1Component,
    Invierte2Component,
    ModalCalcularRendimientoComponent,
    ModalConocerMasComponent,
    Ebook1Component,
    Ebook2Component,
    Ebook3Component,
    EbookComponent,
    DownloadEbookComponent,
    Download1Component,
    DownloadComponent,
    DownloadEbook1Component,
    DownloadEbook2Component,
    DownloadEbook3Component,
    InvierteTusCryptosComponent,
    InvierteHeaderComponent,
    InvierteComoFuncionaComponent,
    InvierteInversionistaComponent,
    InvierteMercadoComponent,
    InvierteFormularioComponent,
    InvierteFooterComponent,
    CancelarSuscripcionComponent,
    LoginA2fComponent,
    CanceladoComponent,
    RegistroComponent,
    Paso2Component,
    Paso1Component,
    Paso3Component,
    Paso4Component,
    ModalComponent,
    ClickOutsideDirective,
    AboutUsComponent,
    UsOneComponent,
    UsTwoComponent,
    UsThreeComponent,
    WaveEffectDirective,
    UsFourComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    
    NgxUsefulSwiperModule,
    Ng2TelInputModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule, 
    MatDialogModule,
    MatSliderModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatSelectModule
  ],
  exports: [MatIconModule], // and the exports
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    Title,
    Meta,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

