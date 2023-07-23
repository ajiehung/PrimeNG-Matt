import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { LoginComponent } from '../login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'homepage', component: HomepageComponent },
  { path: '**', component: HomepageComponent }
];
