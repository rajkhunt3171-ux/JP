import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swiper from 'swiper/bundle';
import { SwiperOptions } from 'swiper/types';
import { Service } from '../../shared/service/service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
  @ViewChild('swiper') swiperEl!: ElementRef;
  @ViewChild('clientSwiper') clientSwiperEl!: ElementRef;
  swiperInstance?: Swiper;
  clientSwiperInstance?: Swiper;

  ClientBannerConfig: SwiperOptions = {
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    speed: 6000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: false,
    pagination: false,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 6,
      }
    }
  };

  ClientList = [
    {
      imageUrl: 'assets/image/logo1.png',
      alt: 'Agrimate'
    },
    {
      imageUrl: 'assets/image/logo2.png',
      alt: 'Radhika'
    },
    {
      imageUrl: 'assets/image/logo3.png',
      alt: 'Conrad'
    },
    {
      imageUrl: 'assets/image/logo4.png',
      alt: 'captain'
    },
    {
      imageUrl: 'assets/image/logo5.png',
      alt: 'Sitaram'
    },
    {
      imageUrl: 'assets/image/logo6.png',
      alt: 'Tata-Steel'
    },
    {
      imageUrl: 'assets/image/logo7.png',
      alt: 'FMC'
    },
    {
      imageUrl: 'assets/image/logo8.png',
      alt: 'FMC'
    },
    {
      imageUrl: 'assets/image/logo9.png',
      alt: 'FMC'
    }
  ]

  isNotValid: boolean = false;
  subject: string = '';
  message: string = '';

  product = [
    {
      img: 'assets/image/product/cctv.jpeg',
      title: 'CCTV Camera',
      icon: 'fa-solid fa-camera',
      description: 'High-definition surveillance cameras for crystal-clear indoor and outdoor security monitoring.',
      url: 'cctv'
    },
    {
      img: 'assets/image/product/laptop.jpeg',
      title: 'Laptop',
      icon: 'fa-solid fa-laptop',
      description: 'Reliable laptops designed for office work, business productivity, multitasking, online meetings, and everyday professional computing needs.',
      url: 'laptop'
    },
    {
      img: 'assets/image/product/computer.jpeg',
      title: 'Desktop',
      icon: 'fa-solid fa-laptop',
      description: 'Professional troubleshooting and repair for hardware and software issues on laptops, desktops, and all computer systems.',
      url: 'computer'
    },
    {
      img: 'assets/image/product/led.jpeg',
      title: 'LED',
      icon: 'fa-solid fa-tv',
      description: 'Professional troubleshooting and repair for display issues, power failures, sound problems, and motherboard faults.',
      url: 'led'
    }
  ]

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
      if (this.clientSwiperEl) {
        this.clientSwiperInstance = new Swiper(this.clientSwiperEl.nativeElement, this.ClientBannerConfig);
      }
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
      const mail = `mailto:jpcomputer.official@gmail.com?subject=${this.subject}?&body=${body}`;
      window.open(mail, '_blank');
    }
  }
}
