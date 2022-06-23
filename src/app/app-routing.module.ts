import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivationTokenComponent } from './auth/activation-token/activation-token.component';
import { CambiarPasswordComponent } from './auth/cambiar-password/cambiar-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroClienteComponent } from './auth/registro-cliente/registro-cliente.component';
import { RegistroSocioComponent } from './auth/registro-socio/registro-socio.component';
import { ResetConfirmacionComponent } from './auth/reset-confirmacion/reset-confirmacion.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SolicitudPasswordComponent } from './auth/solicitud-password/solicitud-password.component';
import { AxinOneComponent } from './vorofx-one/vorofx-one.component';
import { AxinThreeComponent } from './vorofx-three/vorofx-three.component';
import { DownloadComponent } from './vorofx-three/download/download.component';
import { AxinTwoComponent } from './vorofx-two/vorofx-two.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { InvierteTusCryptosComponent } from './invierte-tus-cryptos/invierte-tus-cryptos.component';
import { CancelarSuscripcionComponent } from './cancelar-suscripcion/cancelar-suscripcion.component';
import { LoginA2fComponent } from './auth/login-a2f/login-a2f.component';
import { CanceladoComponent } from './cancelar-suscripcion/cancelado/cancelado.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { Paso2Component } from './auth/registro/paso2/paso2.component';
import { PasosRegistroGuard } from './guards/pasos-registro.guard';
import { Paso1Component } from './auth/registro/paso1/paso1.component';
import { Paso3Component } from './auth/registro/paso3/paso3.component';
import { SalirRegistroGuard } from './guards/salir-registro.guard';
import { Paso4Component } from './auth/registro/paso4/paso4.component';
import { AboutUsComponent } from './vorofx-one/about-us/about-us.component';

const routes: Routes = [
  {
  path: '',
  component: AxinOneComponent,
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: () => import('./vorofx-one/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'renta_fija',
      loadChildren: () => import('./vorofx-one/renta-fija/renta-fija.module').then(m => m.RentaFijaModule)
    },
    {
      path: 'renta_variable',
      loadChildren: () => import('./vorofx-one/renta-variable/renta-variable.module').then(m => m.RentaVariableModule)
    },
    {
      path: 'portafolio_dedicado',
      loadChildren: () => import('./vorofx-one/institucional/institucional.module').then(m => m.InstitucionalModule)
    },
    {
      path: 'aboutUs',
      loadChildren: () => import('./vorofx-one/about-us/about-us.module').then(m => m.AboutUsModule)
    },
    // {
    //   path: 'aboutUs',
    //   component: AboutUsComponent
    // }
  ]
},
{
  path: '',
  component: AxinTwoComponent,
  children: [
    {
      path: 'beneficios',
      loadChildren: () => import('./vorofx-two/beneficios/beneficios.module').then(m => m.BeneficiosModule)
    },
    {
      path: 'preguntas_frecuentes',
      loadChildren: () => import('./vorofx-two/faq/faq.module').then(m => m.FaqModule)
    },
    {
      path: 'politicas_de_privacidad',
      loadChildren: () => import('./vorofx-two/privacidad/privacidad.module').then(m => m.PrivacidadModule)
    },
    {
      path: 'politica_de_retiro',
      loadChildren: () => import('./vorofx-two/politica-retiro/politica-retiro.module').then(m => m.PoliticaRetiroModule)
    },
    {
      path: 'politica_aml',
      loadChildren: () => import('./vorofx-two/politica-aml/politica-aml.module').then(m => m.PoliticaAmlModule)
    },
    {
      path: 'terminos_y_condiciones',
      loadChildren: () => import('./vorofx-two/terminos/terminos.module').then(m => m.TerminosModule)
    },
    {
      path: 'comunicate',
      loadChildren: () => import('./vorofx-two/comunicate/comunicate.module').then(m => m.ComunicateModule)
    },
  ]
},
{
  path: '',
  component: AxinThreeComponent,
  children: [
    {
      path: 'high-frequency-trading',
      loadChildren: () => import('./vorofx-three/high-frecuency-trading/high-frecuency-trading.module').then(m => m.HighFrecuencyTradingModule)
    },
    // {
    //   path: 'invierte-tu-realidad',
    //   loadChildren: () => import('./vorofx-three/invierte-tu-realidad/invierte-tu-realidad.module').then(m => m.InvierteTuRealidadModule)
    // },
    // {
    //   path: 'ebook-invierte-desde-cero',
    //   loadChildren: () => import('./vorofx-three/ebook/ebook.module').then(m => m.EbookModule)
    // },
    {
      path: 'download-ebook/:email',
      loadChildren: () => import('./vorofx-three/download-ebook/download-ebook.module').then(m => m.DownloadEbookModule)
    // },
    // {
    //   path: 'invierte-tus-cryptos',
    //   loadChildren: ()=> import('./vorofx-three/invierte-tus-cryptos/invierte-tus-cryptos.module').then(m=>m.InvierteTusCryptosModule)
    }

  ]
},

{ path: 'download',
  component: DownloadComponent,
  children: [
    {
      path: '',
      redirectTo: 'download',
      pathMatch: 'full'
    },
  ]
},
{ path: 'inicio_de_sesion',
  component: LoginComponent,
  children: [
    {
      path: '',
      redirectTo: 'inicio_de_sesion',
      pathMatch: 'full'
    },
  ]
},
// RUTAS DEL NUEVO REGISTRO || NO BORRAR >:v
{
  path: 'registrarse',
  component: RegistroComponent,
  children: [
    {
      path: '',
      component: Paso1Component,
      canDeactivate: [SalirRegistroGuard],
      pathMatch: 'full'
    },
    {
      path: 'paso_1',
      component: Paso1Component,
      canDeactivate: [SalirRegistroGuard],
      pathMatch: 'full'
    },
    {
      path: 'paso_2',
      component: Paso2Component,
      canActivate: [PasosRegistroGuard],
      canDeactivate: [SalirRegistroGuard],
      pathMatch: 'full'
    },
    {
      path: 'paso_3',
      component: Paso3Component,
      canActivate: [PasosRegistroGuard],
      canDeactivate: [SalirRegistroGuard],
      pathMatch: 'full'
    },
    {
      path: 'paso_4',
      component: Paso4Component,
      canActivate: [PasosRegistroGuard],
      canDeactivate: [SalirRegistroGuard],
      pathMatch: 'full'
    }
  ]
},
// {
//   path: 'registrarse/:email',
//   component: RegistroComponent,
//   children: [
//     {
//       path: '',
//       component: Paso1Component,
//       canDeactivate: [SalirRegistroGuard],
//       pathMatch: 'full'
//     },
//     {
//       path: 'paso_1',
//       component: Paso1Component,
//       canDeactivate: [SalirRegistroGuard],
//       pathMatch: 'full'
//     },
//     {
//       path: 'paso_2',
//       component: Paso2Component,
//       canActivate: [PasosRegistroGuard],
//       canDeactivate: [SalirRegistroGuard],
//       pathMatch: 'full'
//     },
//     {
//       path: 'paso_3',
//       component: Paso3Component,
//       canActivate: [PasosRegistroGuard],
//       canDeactivate: [SalirRegistroGuard],
//       pathMatch: 'full'
//     },
//     {
//       path: 'paso_4',
//       component: Paso4Component,
//       canActivate: [PasosRegistroGuard],
//       canDeactivate: [SalirRegistroGuard],
//       pathMatch: 'full'
//     }
//   ]
// },
{ path: 'registro',
component: RegistroClienteComponent,
  children: [
    {
      path: '',
      redirectTo: 'registro',
      pathMatch: 'full'
    },
  ]
},
{ path: 'registro/:id',
component: RegistroClienteComponent,
  children: [
    {
      path: '',
      redirectTo: 'registro',
      pathMatch: 'full'
    },
  ]
},
{ path: 'registro_socio',
component: RegistroSocioComponent,
  children: [
    {
      path: '',
      redirectTo: 'registro_socio',
      pathMatch: 'full'
    },
  ]
},
{ path: 'recuperar_contraseña',
  component: ResetPasswordComponent,
  children: [
    {
      path: '',
      redirectTo: 'recuperar_contraseña',
      pathMatch: 'full'
    },
  ]
},
{ path: 'activar_cuenta',
  component: ActivationTokenComponent,
  children: [
    {
      path: '',
      redirectTo: 'activar_cuenta',
      pathMatch: 'full'
    },
  ]
}, 
{ path: 'verificacion_de_cuenta',
  component: ResetConfirmacionComponent,
  children: [
    {
      path: '',
      redirectTo: 'verificacion_de_cuenta',
      pathMatch: 'full'
    },
  ]
},
{ path: 'recuperacion_de_contraseña',
  component: SolicitudPasswordComponent,
  children: [
    {
      path: '',
      redirectTo: 'recuperacion_de_contraseña',
      pathMatch: 'full'
    },
  ]
},
{ path: 'cambiar_contrasenia/:id',
  component: CambiarPasswordComponent,
  children: [
    {
      path: '',
      redirectTo: 'cambiar_contrasenia',
      pathMatch: 'full'
    },
  ]
},
{
  path: 'login-a2f/:token',
  component: LoginA2fComponent
},
{ path: 'not_found',
  component: PageNotFoundComponent,
  children: [
    {
      path: '',
      redirectTo: 'not_found',
      pathMatch: 'full'
    },
  ]
},
{
  path: 'invierte-tus-cryptos',
  component: InvierteTusCryptosComponent
},
{
  path: 'cancelar-suscripcion',
  component: CancelarSuscripcionComponent
},
{
  path: 'cancelar-suscripcion/:correo',
  component: CancelarSuscripcionComponent
},
{
  path: 'cancelado',
  component: CanceladoComponent
},
{
  path: '**',
  redirectTo: 'not_found'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: false,
    onSameUrlNavigation: 'reload',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
