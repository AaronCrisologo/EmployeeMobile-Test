import { Component, ViewChild, ElementRef } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: false,
})
export class MainPage {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  segment = 'home';

  constructor() { }

  ngAfterViewInit() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  onTabChange(tabName?: string) {
    if (tabName) {
      this.segment = tabName;
    }

    if (this.swiper) {
      if (this.segment === 'home') {
        this.swiper.slideTo(0);
      } else if (this.segment === 'news') {
        this.swiper.slideTo(1);
      } else if (this.segment === 'contact') {
        this.swiper.slideTo(2);
      } else if (this.segment === 'downloads') {
        this.swiper.slideTo(3);
      }
    }
  }

  onSlideChange() {
    if (this.swiper) {
      const index = this.swiper.activeIndex;
      if (index === 0) {
        this.segment = 'home';
      } else if (index === 1) {
        this.segment = 'news';
      } else if (index === 2) {
        this.segment = 'contact';
      } else if (index === 3) {
        this.segment = 'downloads';
      }
    }
  }
}
