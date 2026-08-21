import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../shared/component/header/header";
import { Footer } from "../shared/component/footer/footer";
import { Service } from '../shared/service/service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

  windowScroll: boolean = false;
  isSticky: boolean = false;

  constructor(public sharedService: Service) { }


  openWhatsApp(): void {
    const phoneNumber = '+918733874738';
    const message = `Hi,\r\nI would like to know about your products.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    this.isSticky = scrollTop > 1; // Sticky navbar
    this.windowScroll = scrollTop > 200; // Show scroll-to-top button
  }

  scrollToTop(): void {
    this.sharedService.scrollToTop();
  }
}
