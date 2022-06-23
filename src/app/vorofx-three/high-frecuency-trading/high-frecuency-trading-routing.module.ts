import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighFrecuencyTradingComponent } from './high-frecuency-trading.component';

const routes: Routes = [
  {
    path: '',
    component: HighFrecuencyTradingComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighFrecuencyTradingRoutingModule { }
