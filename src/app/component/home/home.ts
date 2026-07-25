import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import Swiper from 'swiper/bundle';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
  @ViewChild('swiper') swiperEl!: ElementRef;
  swiperInstance?: Swiper;

  ngAfterViewInit() {
    this.swiperInstance = new Swiper(this.swiperEl.nativeElement, {
      slidesPerView: 1,
      // spaceBetween: 20,
      loop: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      breakpoints: {
        320: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 1
        },
        1200: {
          slidesPerView: 1
        }
      }
    });
  }
}
