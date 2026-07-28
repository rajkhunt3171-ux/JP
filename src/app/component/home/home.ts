import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swiper from 'swiper/bundle';
import { Service } from '../../shared/service/service';

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

  faq = [
    {
      question: "Do you provide CCTV installation services?",
      answer: `Yes, we offer <b class="highlight">professional CCTV installation, configuration, maintenance, and repair services</b> for homes, offices, shops, warehouses, and commercial properties.`
    },
    {
      question: "Do you repair laptops and desktop computers?",
      answer: `Yes, we repair <b class="highlight">all major laptop and desktop brands</b>, including hardware repairs, software troubleshooting, virus removal, motherboard repairs, SSD/RAM upgrades, and operating system installation.`
    },
    {
      question: "Which CCTV brands do you support?",
      answer: `We work with leading CCTV brands such as <b class="highlight">Hikvision, Dahua, CP Plus, Uniview, and other popular security camera systems</b>.`
    },
    {
      question: "Do you provide LED TV repair services?",
      answer: `Yes, we repair <b class="highlight">LED TVs for display issues, power failures, sound problems, motherboard faults, and other technical issues</b>, subject to repair feasibility.`
    },
    {
      question: "Do you offer data recovery services?",
      answer: `Yes, we provide <b class="highlight">data recovery services</b> for laptops, desktops, hard drives (HDD), SSDs, USB drives, and memory cards whenever recovery is possible.`
    }
  ];

  constructor(public sharedService: Service) { }


  ngAfterViewInit() {
    setTimeout(() => {
      this.swiperInstance = new Swiper(this.swiperEl.nativeElement, {
        slidesPerView: 1,
        // spaceBetween: 20,
        loop: true,
        observer: true,
        observeParents: true,

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
    }, 100);
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
