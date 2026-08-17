import { Component } from '@angular/core';
import { Service } from '../../service/service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [RouterLink],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar {
  constructor(public sharedService: Service) { }

}
