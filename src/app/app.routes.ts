import { Routes } from '@angular/router';
import { SlotsComponent } from './slots/slots.component';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

export const routes: Routes = [
  { path: '', redirectTo: 'slots', pathMatch: 'full' },
  { path: 'slots', component: SlotsComponent },
  { path: '**', component: ComingSoonComponent },
];
