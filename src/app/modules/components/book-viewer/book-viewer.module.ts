import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookViewerComponent } from './book-viewer.component';
import {CarouselModule} from "../carousel/carousel.module";



@NgModule({
  declarations: [
    BookViewerComponent
  ],
  exports: [
    BookViewerComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class BookViewerModule { }
