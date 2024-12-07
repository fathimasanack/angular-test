import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
// import { LandingComponent } from './landing/landing.component';



export const routes: Routes = [
    // {path:'',component:LandingComponent},
    {path:'',component:RegisterComponent},
    {path:'home',component:HomeComponent},

];
