import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadEbookComponent } from './download-ebook.component';

const routes: Routes = [
  {
    path: '',
    component: DownloadEbookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadEbookRoutingModule { }
