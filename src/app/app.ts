import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Carousel } from "./components/carousel/carousel";
import { Aside } from "./components/aside/aside";
import { Cards } from "./components/cards/cards";
import { Title } from "./components/title/title";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Carousel, Aside, Cards, Title],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('challenge-mariano-j-muzas');
}
