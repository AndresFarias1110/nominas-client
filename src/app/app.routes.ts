import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { NotfoundComponent } from './components/notfound/notfound.component';

const APP_ROUTES: Routes = [
	{ path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'misnominas', component: HomeComponent },
  { path: '**', pathMatch:'full', component: NotfoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
