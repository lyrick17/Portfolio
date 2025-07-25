import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @ViewChildren('navpill') navPills!: QueryList<ElementRef<HTMLDivElement>>;

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


}
