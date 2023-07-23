import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './home-page/homepage.component';
import { NewspageComponent } from './news-page/newspage.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {
    path: 'home-page',
      loadComponent:() => import('./home-page/homepage.component').then((c) => c.HomepageComponent)
      // loadChildren:() => import('./homepage/homepage.routes').then((r) => r.routes)
  },
  {
    path: 'news-page',
    loadComponent:() => import('./news-page/newspage.component').then((c) => c.NewspageComponent)
  },
  { path: '**', component: LoginComponent }
];
