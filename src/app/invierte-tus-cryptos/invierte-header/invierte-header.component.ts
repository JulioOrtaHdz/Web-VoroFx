import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invierte-header',
  templateUrl: './invierte-header.component.html',
  styleUrls: ['./invierte-header.component.css']
})
export class InvierteHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
