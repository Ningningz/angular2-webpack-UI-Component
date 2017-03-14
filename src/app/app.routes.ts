import { AboutComponent } from './about';
import { DataResolver } from './app.resolver';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule' },
  { path: 'barrel', loadChildren: './+barrel#BarrelModule' },
  { path: 'ningning', loadChildren: './ning#NingModule' },
  { path: '**', component: NoContentComponent },
];
