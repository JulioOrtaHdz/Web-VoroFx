import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { VorofxService } from 'src/app/services/vorofx.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-download-ebook1',
  templateUrl: './download-ebook1.component.html',
  styleUrls: ['./download-ebook1.component.css']
})
export class DownloadEbook1Component implements OnInit, OnDestroy {
  public load:boolean = false;
  blob: any;
  private baseUrl = environment.url_login;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient, private vorofxService: VorofxService
  ) {

  }


  ngOnInit(): void {
    this.download();
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {

  }

  download(): any {

    this.vorofxService.getPdf().subscribe((data:any) => {

      console.log(data);
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
