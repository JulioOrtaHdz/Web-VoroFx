import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EbookComponent } from './ebook.component';

const routes: Routes = [
  {
    path: '',
    component: EbookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EbookRoutingModule { }
