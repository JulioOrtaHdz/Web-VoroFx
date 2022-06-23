import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentaFijaComponent } from './renta-fija.component';

const routes: Routes = [
  {
    path: '',
    component: RentaFijaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentaFijaRoutingModule { }
