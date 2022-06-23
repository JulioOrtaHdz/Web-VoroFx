import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentaVariableComponent } from './renta-variable.component';

const routes: Routes = [
  {
    path: '',
    component: RentaVariableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentaVariableRoutingModule { }
 