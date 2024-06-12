import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreatePageComponent } from './create-page/create-page.component';

export const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "create",
    component: CreatePageComponent,
    data: { title: 'Hello Angular 18' }
  }
];
