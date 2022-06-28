import {Route} from "@angular/router";

export const appRoutes: Route[] = [
  { path: '', pathMatch : 'full', redirectTo: 'home' },
  { path: '',
    children: [
      { path:'home', loadChildren: () => import('src/app/modules/pages/home/home.module').then(m => m.HomeModule)}
    ]}
];
