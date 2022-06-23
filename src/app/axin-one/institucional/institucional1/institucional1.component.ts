import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AxinService } from 'src/app/services/vorofx.service';

declare var $:any;

@Component({
  selector: 'app-institucional1',
  templateUrl: './institucional1.component.html',
  styleUrls: ['./institucional1.component.css']
})
export class Institucional1Component implements OnInit, OnDestroy, AfterViewInit {

  // @ViewChild("videoPlayer", { static: false}) videoplayer: ElementRef;
  isPlay: Boolean = false;
  myVideo: any;
  
  languages: string[] = [
    'Español',
    'Ingles',
  ];

  show:boolean = false;
  msj:boolean = false;

  language:any;

  public form = {
    name: null,
    email: null,
    country: 'México',
    dialCode: '52',
    phone: null,
    language: null,
    telegram: null,
    msj: null,
  };

 

  public error: any = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private Axin: AxinService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.language = this.document.querySelector('#lang');
    this.myVideo = this.document.querySelector('#my_video_1')
    setInterval(async () => {
      this.playPause();
    }, 1000);

  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }
 


  plays() {

    if(this.myVideo.play() == undefined) {
      this.myVideo.currenTime = 0;
    }
  }

  playPause() {
    if(!this.isPlay) {
      this.isPlay = true;

      this.myVideo.currenTime= 1;

    } else {

      this.plays();
    }
  }

  onCountryChange(event: any) {

   this.form.country = event.name;
   this.form.dialCode = event.dialCode;
  }
  lang() {
    this.language = this.document.querySelector('#lang');
    this.form.language = this.language.value;
  }

  ngAfterViewInit() {
    this.language.addEventListener('input', this.lang.bind(this));
  }

  onSubmit() {
    this.show = true;
    console.log(this.form);
    this.Axin.contact(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    console.log(data);
    this.show = false;
    this.msj = true;
    this.reset(); 
  }

  handleError(error: any) {
    this.error = error.error.errors;
    this.show = false;
    console.log(error);
  }

  reset() {
    this.form.name = null;
    this.form.email = null;
    this.form.dialCode = '';
    this.form.phone = null;
    this.form.language = null;
  }


}
