import {Route} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";

export const appRoutes: Route[] = [
  { path: '', pathMatch : 'full', redirectTo: 'home' },
  { path: '',
    component: LayoutComponent,
    children: [
      { path:'home', loadChildren: () => import('src/app/modules/pages/home/home.module').then(m => m.HomeModule)}
    ]}
];
