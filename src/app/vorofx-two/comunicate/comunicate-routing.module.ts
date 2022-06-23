import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComunicateComponent } from './comunicate.component';

const routes: Routes = [
  {
    path: '',
    component: ComunicateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunicateRoutingModule { }
