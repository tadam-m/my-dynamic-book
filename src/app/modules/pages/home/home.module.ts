import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {Route, RouterModule} from "@angular/router";
import {BookViewerModule} from "../../components/book-viewer/book-viewer.module";


const homeRoutes: Route[] = [
  {
    path     : '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(homeRoutes),
        BookViewerModule,
    ]
})
export class HomeModule { }
