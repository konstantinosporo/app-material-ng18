import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { GlobalThemeService } from '../../services/global-theme.service';
import { Slide } from './carousel';
import { fadeIn, fadeOut } from './carousel-animations';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatIcon,MatButtonModule, MatCardModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(fadeIn, { params: { time: '1300ms' } })]),
      transition('* => void', [useAnimation(fadeOut, { params: { time: '1300ms' } })]),
      
    ])
  ]
})
export class CarouselComponent{
  @Input() slides: Slide[] = [];
  // keep track of the current slide
  currentSlide = 0; 
  isThemeDark: boolean = false;
  
  constructor(private readonly themeService: GlobalThemeService) {
    this.themeService.themeStream$.subscribe(isDark=> this.isThemeDark = isDark);
   }
  
  // ngOnInit() {
  //   this.preloadImages(); 
  // }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    //console.log("previous clicked is:", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    //console.log("next clicked, new current slide:", this.currentSlide);
  }

  // preloadImages() {
  //   for (const slide of this.slides) {
  //     new Image().src = slide.src;
  //   }
  // }
}
