import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
 {path:"", redirectto:"login",pathmatch:"full"},
 {path:"login", component:Login},
 {path:"home",component:Home}   
];
