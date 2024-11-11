import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        loadComponent: ()=> import("./home/home.component")
    },
    {
        path:"subscriptions",
        loadComponent: ()=> import("./subscriptions-form/subscriptions-form.component")
    },
    {
        path:"subscriptions-FPV",
        loadComponent: ()=> import("./subscriptions-form-fpv/subscriptions-form-fpv.component")
    },
    {
        path:"subscriptions-FIC",
        loadComponent: ()=> import("./subscriptions-form-fic/subscriptions-form-fic.component")
    },
    {
        path:"historicalLogService",
        loadComponent: ()=> import("./list-log/list-log.component")
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
