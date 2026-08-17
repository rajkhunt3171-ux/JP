import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service {

  private _toggleSidebar: boolean = false;

  get toggleSidebar(): boolean {
    return this._toggleSidebar;
  }

  set toggleSidebar(value: boolean) {
    this._toggleSidebar = value;
    if (typeof document !== 'undefined') {
      if (value) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    }
  }

  bannerList = [
    {
      desktop_banner: 'assets/image/banner/banner_1.jpeg',
      mobile_banner: 'assets/image/banner/m_banner_1.jpeg',
      alt: 'Slide 1'
    },
    {
      desktop_banner: 'assets/image/banner/banner_2.jpeg',
      mobile_banner: 'assets/image/banner/m_banner_2.jpeg',
      alt: 'Slide 2'
    },
    {
      desktop_banner: 'assets/image/banner/banner_3.jpeg',
      mobile_banner: 'assets/image/banner/m_banner_3.jpeg',
      alt: 'Slide 3'
    },
    {
      desktop_banner: 'assets/image/banner/banner_4.jpeg',
      mobile_banner: 'assets/image/banner/m_banner_4.jpeg',
      alt: 'Slide 3'
    }
  ];

  scrollto(id: any) {
    this.toggleSidebar = false;
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        scrollTo(0, element.offsetTop - 160);
      }
    }, 0);
  }
}
