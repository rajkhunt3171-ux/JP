import { Component } from '@angular/core';
import { Service } from '../../service/service';

@Component({
  selector: 'app-side-bar',
  imports: [],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar {
  constructor(public sharedService: Service) { }

}
