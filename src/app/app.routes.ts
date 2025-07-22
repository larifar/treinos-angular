import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MinigamesComponent } from './pages/minigames/minigames.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'minigames',
    component: MinigamesComponent
  }
];
