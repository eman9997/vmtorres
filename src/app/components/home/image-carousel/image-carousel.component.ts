import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent {
  images: string[] = [
    '/assets/images/carousel/1.jpg',
    '/assets/images/carousel/2.jpg',
    '/assets/images/carousel/3.jpg',
    '/assets/images/carousel/4.jpg',
    '/assets/images/carousel/5.jpg',
    '/assets/images/carousel/6.jpg',
    '/assets/images/carousel/7.jpg',
    '/assets/images/carousel/8.jpg',
    '/assets/images/carousel/9.jpg',
  ];
  currentIndex = 0;

  getCurrentImage(): string {
   
    return this.images[this.currentIndex];
  }
  
  getPrevImage(): string {
    if (this.currentIndex === 0) {
      
      return this.images[this.images.length - 1];
    } else {
      
      return this.images[this.currentIndex - 1];
    }
  }
  
  getNextImage(): string {
    if (this.currentIndex === this.images.length - 1) {
      
      return this.images[0];
    } else {
      
      return this.images[this.currentIndex + 1];
    }
  }
  

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }
}
