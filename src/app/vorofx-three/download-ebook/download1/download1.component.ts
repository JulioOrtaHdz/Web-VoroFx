import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VorofxService } from 'src/app/services/vorofx.service';

@Component({
  selector: 'app-download1',
  templateUrl: './download1.component.html',
  styleUrls: ['./download1.component.css']
})
export class Download1Component implements OnInit, OnDestroy {
  public load = false;
  public form = {
    email: null
  }
  blob: any;


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private activatedRoute: ActivatedRoute,
    private vorofxService: VorofxService
  ) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.form.email = params.email;

    });
  }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {


  }

  download(): any {

    this.vorofxService.getPdf().subscribe((data:any) => {

      this.blob = new Blob([data], {type: 'application/pdf'});

      var downloadURL = window.URL.createObjectURL(data);
      var link = this.document.createElement('a');
      link.href = downloadURL;
      link.download = "E-Book Invierte desde Cero.pdf";
      link.click();

    });

    this.load = false;

  }


}
