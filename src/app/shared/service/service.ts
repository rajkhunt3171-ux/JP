import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service {

  toggleSidebar: boolean = false;

  scrollto(id: any) {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        scrollTo(0, element.offsetTop - 160);
      }
    }, 0);
  }
}
