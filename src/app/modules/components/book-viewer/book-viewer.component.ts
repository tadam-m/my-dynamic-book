import {Component, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from "../carousel/carousel.component";
import {AnimationType} from "../carousel/carousel.animations";
import {Pages} from "../carousel/carousel.interface";
import {LocalStorageService} from "../../../core/services/local-storage.service";

@Component({
  selector: 'app-book-viewer',
  templateUrl: './book-viewer.component.html',
  styleUrls: ['./book-viewer.component.scss']
})
export class BookViewerComponent implements OnInit {
  @ViewChild(CarouselComponent) carousel!: CarouselComponent;

  animationType = AnimationType.Scale;
  pages: Pages[] = [{
    type: 'empty',
    content:"src/assets/images/undraw_Books_re_8gea.png"
  }];

  localStorageChanges$ = this.localStorageService.changes$;

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.initPages();
    this.localStorageChanges$.subscribe((value: any) => {
      this.pages = [];
      value.value.forEach((pages: any) => {
        this.pages.push({type: pages.type, content: pages.value});
      })
    });
  }

  initPages(): void {
    let persistentData = this.localStorageService.get('pages');
    if (!persistentData) {
      return;
    }
    this.pages = [];
    persistentData.forEach((pages: any) => {
      this.pages.push({type: pages.type, content: pages.value});
    })
  }
  setAnimationType(type: { value: AnimationType; }) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }
}
