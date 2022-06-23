import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoliticaRetiroComponent } from './politica-retiro.component';

const routes: Routes = [ {
  path: '',
  component: PoliticaRetiroComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliticaRetiroRoutingModule { }
