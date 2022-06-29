import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {CreatePageModalModule} from "../modules/components/create-page-modal/create-page-modal.module";



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    CreatePageModalModule
  ]
})
export class LayoutModule { }
