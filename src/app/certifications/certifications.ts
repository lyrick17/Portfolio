import { Component, effect, ElementRef, QueryList, viewChild, viewChildren } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CertificatesCollection } from './certifications.model';
import { debounceTime, fromEvent, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Image, ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-certifications',
  imports: [CarouselModule, ImageModule, CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class Certifications {
  certificates = CertificatesCollection;

  images = viewChildren<Image>('imageDiv');
  text = viewChildren<ElementRef<HTMLDivElement>>('textDiv');

  imageHeight: string = '';
  textHeight: string = '';

  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 2, numScroll: 1 },
    // { breakpoint: '768px', numVisible: 2, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 }
  ];

  constructor() {
    const resize$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        map(() => window.innerWidth)
      );
    
    const widthSignal = toSignal(resize$, { initialValue: window.innerWidth });
    effect(() => {
      const width = widthSignal();
      console.log("aaaaaaasa32v65e21v65")
      this.calculateImageHeights();

    })

  }
  ngAfterViewInit() {
    // Calculate the height of the image and text containers
    setTimeout(() => {
      this.calculateImageHeights();
    }, 1000);

  }

  calculateImageHeights() {
    // Get max heights dynamically
    console.log("images are", this.images().map(el => el.el.nativeElement.offsetHeight));
    const maxImgHeight = Math.max(...this.images().map(el => el.el.nativeElement.offsetHeight));
    const maxTextHeight = Math.max(...this.text().map(el => el.nativeElement.offsetHeight));
    // Save them as strings for binding in template
    this.imageHeight = `${maxImgHeight}px`;
    this.textHeight = `${maxTextHeight}px`;
    console.log("Image height, ", this.imageHeight, "Text height", this.textHeight);
  }
  

}
