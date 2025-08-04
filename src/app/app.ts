import { Component, effect, ElementRef, signal, viewChild, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { fromEvent, Subscription } from 'rxjs';

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

  private subscriptions: Subscription[] = [];
  private cleanUps: (() => void)[] = [];

  ngOnInit() {
    const scrollSubscribe = fromEvent(window, 'scroll').subscribe(() => {
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
          // this.clicked = false; // Reset clicked state when scrolling
          this.lastKnownScrollPosition = currentScrollPosition;
          this.ticking = false;
        });

        this.ticking = true;
      }
    
    });
    this.subscriptions.push(scrollSubscribe);

    // Clean up subscriptions
    this.cleanUps.push(() => scrollSubscribe.unsubscribe());
    
    ['wheel', 'touchstart', 'keydown'].forEach((evtName) => {
      const handler = (ev: Event) => {
        // only act on trusted (user) events
        if (this.clicked && ev.isTrusted) {
          this.clicked = false;
        }
      };

      document.addEventListener(evtName, handler, { capture: true });

      this.cleanUps.push(() =>
        document.removeEventListener(evtName, handler, { capture: true })
      );
    });
  
  }

  ngOnDestroy(): void {
    this.cleanUps.forEach(cleanUp => cleanUp());
  }

  navBarClicked() {
    this.clicked = true;
  }
}