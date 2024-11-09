import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { carouselSlideList, Slide } from '../components/carousel/carousel';
import { CarouselComponent } from "../components/carousel/carousel.component";
import { CardWrapperComponent } from "../shared/wrappers/card-wrapper/card-wrapper.component";
import { CardAction } from '../shared/wrappers/card-wrapper/card';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatGridListModule, CarouselComponent, CardWrapperComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public slides: Slide[] = carouselSlideList;
  actions!: CardAction[];

  ngOnInit(): void {
    this.actions = [
      { title: 'Google', href: 'https://www.google.gr', icon: 'public' },
      { title: 'Action', icon: 'gamepad' },
    ]
  }

  throwError(errorMessage: string) {
    throw new Error(errorMessage);
  }

  catchEmit() {
    this.throwError('Action event clicked');
  }
}
