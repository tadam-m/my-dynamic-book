import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { ExtraOptions, PreloadAllModules, RouterModule } from "@angular/router";
import { appRoutes } from "./app-routing";
import {LayoutModule} from "./layout/layout.module";
import { CreatePageComponent } from './modules/components/create-page/create-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {QuillModule} from "ngx-quill";

const routerConfig: ExtraOptions = {
  preloadingStrategy       : PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  declarations: [
    AppComponent,
    CreatePageComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        //Router module
        RouterModule.forRoot(appRoutes, routerConfig),

        //Layout module of the application
        LayoutModule,

        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        QuillModule.forRoot()

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
