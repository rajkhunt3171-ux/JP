import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service } from '../../service/service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  phoneNumber: string = '+91 8733874738';
  whatsappNumber: string = '91 8733874738';
  email: string = 'jpcomputer.official@gmail.com';

  currYear = new Date().getFullYear();

  constructor(public sharedService: Service) { }


}
