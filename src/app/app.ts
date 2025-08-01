import { Component, effect, ElementRef, signal, viewChild, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css', './shared/shared.css']
})
export class App {
  protected readonly title = signal('portfolio');

  appHeader = viewChild<ElementRef<HTMLDivElement>>('appHeaderDiv');
  lastKnownScrollPosition = 0;
  ticking = false;
  clicked = false;

  constructor() {
    // Handle scroll events to hide navbar when user scrolls down
    // display the navbar when user scrolls up
    const scroll$ = fromEvent(window, 'scroll');
    scroll$.subscribe(() => {
      if (!this.ticking && !this.clicked) {
        window.requestAnimationFrame(() => {
          const currentScrollPosition = window.scrollY;
          if (this.appHeader()?.nativeElement) {
            if (this.lastKnownScrollPosition > currentScrollPosition) {
              // User is scrolling up
              this.appHeader()!.nativeElement.classList.remove('-top-100');
              this.appHeader()!.nativeElement.classList.add('top-0');
            } else {
              // User is scrolling down
              this.appHeader()!.nativeElement.classList.add('-top-100');
              this.appHeader()!.nativeElement.classList.remove('top-0');
            }
          }
          this.clicked = false; // Reset clicked state when scrolling
          this.lastKnownScrollPosition = currentScrollPosition;
          this.ticking = false;
        });

        this.ticking = true;
      } else {
        this.clicked = false; // Reset clicked state if already ticking
      }

    });
  }

  navBarClicked() {
    this.clicked = true;
  }
}
