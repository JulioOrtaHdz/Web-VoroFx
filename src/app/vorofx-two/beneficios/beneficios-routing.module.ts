import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeneficiosComponent } from './beneficios.component';

const routes: Routes = [{
  path: '',
  component: BeneficiosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiosRoutingModule { }
