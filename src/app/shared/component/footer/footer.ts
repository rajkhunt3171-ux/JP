import { Component } from '@angular/core';
import { Service } from '../../service/service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  phoneNumber: string = '+91 8469492080';
  whatsappNumber: string = '91 8469492080';
  email: string = 'rajkhunt5285@gmail.com';

  currYear = new Date().getFullYear();

  constructor(public sharedService: Service) { }


}
