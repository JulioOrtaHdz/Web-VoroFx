import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvierteTuRealidadComponent } from './invierte-tu-realidad.component';

const routes: Routes = [
  {
    path: '',
    component: InvierteTuRealidadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvierteTuRealidadRoutingModule { }
 