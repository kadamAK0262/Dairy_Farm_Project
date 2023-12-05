import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  // currentSlideIndex = 0;
  // slides: Array<string> = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg']; // Your slide images

  // constructor() {}

  // ngOnInit(): void {
  //   this.showSlide(this.currentSlideIndex);
  // }

  // showSlide(index: number): void {
  //   // Hide all slides
  //   const slideElements = document.querySelectorAll('.carousel-item');
  //   slideElements.forEach((slide: Element) => {
  //     (slide as HTMLElement).style.display = 'none';
  //   });

  //   // Show the selected slide
  //   (slideElements[index] as HTMLElement).style.display = 'block';
  // }

  // nextSlide(): void {
  //   this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  //   this.showSlide(this.currentSlideIndex);
  // }

  // prevSlide(): void {
  //   this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  //   this.showSlide(this.currentSlideIndex);
  // }

  // @ViewChildren('carouselItem') carouselItems!: QueryList<ElementRef>;

  // private currentIndex = 0;

  // ngOnInit() {
  //   this.showCarouselItem(this.currentIndex);
  // }

  // showCarouselItem(index: number) {
  //   if (this.carouselItems && this.carouselItems.length > index) {
  //     const items = this.carouselItems.toArray();
  //     items.forEach((item, i) => {
  //       if (i === index) {
  //         item.nativeElement.classList.add('active');
  //       } else {
  //         item.nativeElement.classList.remove('active');
  //       }
  //     });
  //   }
  // }

  // prevSlide() {
  //   if (this.currentIndex > 0) {
  //     this.currentIndex--;
  //     this.showCarouselItem(this.currentIndex);
  //   }
  // }

  // nextSlide() {
  //   if (this.currentIndex < this.carouselItems.length - 1) {
  //     this.currentIndex++;
  //     this.showCarouselItem(this.currentIndex);
  //   }
  // }


}
