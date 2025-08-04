import { ViewportScroller } from '@angular/common';
import { Component, effect, ElementRef, inject, output, QueryList, signal, viewChild, ViewChildren } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @ViewChildren('navpill') navPills!: QueryList<ElementRef<HTMLDivElement>>;
  private viewportScroller = inject(ViewportScroller);
  appHeader = viewChild<ElementRef<HTMLDivElement>>('appHeader');
  viewportWidth = signal(window.innerWidth);
  clicked = output<boolean>();

  constructor() {
    // Resize event handling using RxJS for Anchor Scrolling
    const resize$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        map(() => window.innerWidth)
      );

    const widthSignal = toSignal(resize$, { initialValue: window.innerWidth });
    effect(() => {
      const width = widthSignal();
        // Change the header size based on the viewport size
      this.updateHeaderSize();
    });

  }

  ngOnInit() {
    this.viewportScroller.setOffset(() => [0, 60]);
  }
  ngAfterViewInit() {
    let maxWidth = 0;

    this.navPills.forEach((pill) => {
      if (pill.nativeElement.offsetWidth > maxWidth) {
        maxWidth = pill.nativeElement.offsetWidth;
      }
    })

    this.navPills.forEach((pill) => {
      pill.nativeElement.style.width = `${maxWidth}px`;
    });
  }

  updateHeaderSize() {
    const header = this.appHeader();
    if (header) {
      const headerHeight = header.nativeElement.getBoundingClientRect().height;
      // const headerHeight = header.nativeElement.offsetHeight;
      this.viewportScroller.setOffset(() => [0, headerHeight]);
    }
  }

  onNavClick(destinationId: string) {
    this.viewportScroller.scrollToAnchor(destinationId);
    this.clicked.emit(true);
  }


}
