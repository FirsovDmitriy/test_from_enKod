import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./home-page/list/list.component').then((m) => m.ListComponent),
      },
      {
        path: 'tile',
        loadComponent: () =>
          import('./home-page/grid/grid.component').then((mod) => mod.GridComponent),
      },
    ],
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./create-page/create-page.component').then(
        (mod) => mod.CreatePageComponent
      ),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./edit-page/edit-page.component').then(
        (mod) => mod.EditPageComponent
      ),
  },
];
