import {Component, Input, OnInit} from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import {AnimationType, scaleIn, scaleOut} from "./carousel.animations";
import {Pages} from "./carousel.interface";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),
    ])
  ]
})

export class CarouselComponent implements OnInit {

  @Input() pages: Pages[] = [];
  @Input() animationType = AnimationType.Scale;

  currentSlide = 0;

  constructor() { }

  ngOnInit() {
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.pages.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.pages.length ? 0 : next;
  }
}
