import { NgModule } from '@angular/core';
import {ExtraOptions, PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {appRoutes} from "./app-routing";

const routerConfig: ExtraOptions = {
  preloadingStrategy       : PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
