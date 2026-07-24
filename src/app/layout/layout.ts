import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../shared/component/header/header";
import { Footer } from "../shared/component/footer/footer";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout { }
