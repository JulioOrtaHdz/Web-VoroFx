import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-renta-fija2',
  templateUrl: './renta-fija2.component.html',
  styleUrls: ['./renta-fija2.component.css']
})
export class RentaFija2Component implements OnInit, OnDestroy {
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 'auto',
    spaceBetween: 1,
  
  };

  constructor(private renderer:Renderer2, private el:ElementRef){

  }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }



  
  
  removeWrapper():void{
    const wrapper = this.el.nativeElement.querySelector('.swiper-wrapper')
    const parent = this.renderer.parentNode(wrapper);
    this.renderer.removeChild(parent, wrapper);
  }
}
