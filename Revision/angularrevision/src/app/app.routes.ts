import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginformComponent } from './loginform/loginform.component';

export const routes: Routes = [
  //default route
  {
    path:'',
    redirectTo:'app-login',
    pathMatch:'full'
  },
  {
    path:'app-login',
    component:LoginformComponent
  },
  {
    path:'app-homepage',
    component:HomepageComponent
  }
];
