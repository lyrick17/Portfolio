import { Routes } from '@angular/router';
import { Profile } from './profile/profile';

export const routes: Routes = [
    {
        path: '',
        component: Profile,
    },
    {
        path: 'projects',
        loadComponent: () => import('./projects/projects').then(m => m.Projects),
    },
    {
        path: 'certifications',
        loadComponent: () => import('./certifications/certifications').then(m => m.Certifications),
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    }
];
