import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swiper from 'swiper/bundle';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
  @ViewChild('swiper') swiperEl!: ElementRef;
  swiperInstance?: Swiper;

  isNotValid: boolean = false;
  subject: string = '';
  message: string = '';

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

  sendMail() {
    this.isNotValid = true;
    let toasterErrorMsg = '';
    if (!this.subject) {
      toasterErrorMsg = 'required';
    }
    if (toasterErrorMsg) {
      return;
    } else {
      this.isNotValid = false;;
      const body = `${this.message}`;
      const mail = `mailto:info@opectillerblade.com?subject=${this.subject}?&body=${body}`;
      window.open(mail, '_blank');
    }
  }
}
