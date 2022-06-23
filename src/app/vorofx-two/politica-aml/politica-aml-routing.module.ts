import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoliticaAmlComponent } from './politica-aml.component';

const routes: Routes = [{
  path: '',
  component: PoliticaAmlComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliticaAmlRoutingModule { }
