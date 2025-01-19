import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, },

    {
        path: 'about',
        loadComponent: () => import('./about/about.component')
            .then(mod => mod.AboutComponent)
    },
    {
        path: 'skills',
        loadComponent: () => import('./skills/skills.component')
            .then(mod => mod.SkillsComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./projects/projects.component')
            .then(mod => mod.ProjectsComponent)
    },

    {
        path: 'contact',
        loadComponent: () => import('./contacts/contacts.component')
            .then(mod => mod.ContactsComponent)
    }
];
