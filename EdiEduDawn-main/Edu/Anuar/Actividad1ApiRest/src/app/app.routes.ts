import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewContactoComponent } from './pages/view-contacto/view-contacto.component';
import { NewuserComponent } from './pages/newuser/newuser.component';

export const routes: Routes = [
    {path:"", pathMatch: "full", redirectTo: "home"},
    {path: "home", component: HomeComponent},
    {path: "user/:iduser", component: ViewContactoComponent},
    {path: "newuser", component: NewuserComponent},
    {path: "actualizar/user/:iduser", component: NewuserComponent},
    {path: "**", redirectTo: "home"}
];
