import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'principal', component: PrincipalComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
