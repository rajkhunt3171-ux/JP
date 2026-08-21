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

  scrollToTop(): void {
    this.toggleSidebar = false;
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  scrollto(id: any) {
    this.toggleSidebar = false;
    if (!id || id === 'home' || id === 'top') {
      const element = typeof document !== 'undefined' ? document.getElementById(id) : null;
      if (element) {
        window.scrollTo({
          top: Math.max(0, element.offsetTop - 160),
          behavior: 'smooth'
        });
      } else {
        this.scrollToTop();
      }
      return;
    }

    const tryScroll = (attempts = 6) => {
      const element = typeof document !== 'undefined' ? document.getElementById(id) : null;
      if (element) {
        window.scrollTo({
          top: Math.max(0, element.offsetTop - 160),
          behavior: 'smooth'
        });
      } else if (attempts > 0) {
        setTimeout(() => tryScroll(attempts - 1), 100);
      } else {
        this.scrollToTop();
      }
    };

    setTimeout(() => tryScroll(), 50);
  }
}
