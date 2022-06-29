import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePageModalComponent } from './create-page-modal.component';
import {MatButtonModule} from "@angular/material/button";
import {OverlayModule} from "@angular/cdk/overlay";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    CreatePageModalComponent
  ],
  exports: [
    CreatePageModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    OverlayModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class CreatePageModalModule { }
