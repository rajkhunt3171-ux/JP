import { Component } from '@angular/core';
import { Service } from '../../service/service';
import { SideBar } from "../side-bar/side-bar";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [SideBar, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(public sharedService: Service) { }

  toggleSidebar() {
    this.sharedService.toggleSidebar = !this.sharedService.toggleSidebar;
  }
}
