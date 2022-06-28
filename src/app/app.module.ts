import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { ExtraOptions, PreloadAllModules, RouterModule } from "@angular/router";
import { appRoutes } from "./app-routing";
import {LayoutModule} from "./layout/layout.module";

const routerConfig: ExtraOptions = {
  preloadingStrategy       : PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    //Router module
    RouterModule.forRoot(appRoutes, routerConfig),

    //Layout module of the application
    LayoutModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
