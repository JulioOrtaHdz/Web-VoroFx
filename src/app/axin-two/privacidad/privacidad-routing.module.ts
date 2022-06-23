import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacidadComponent } from './privacidad.component';

const routes: Routes = [
  {
    path: '',
    component: PrivacidadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacidadRoutingModule { }
