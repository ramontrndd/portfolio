import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectComponent } from './pages/project/project.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    title: 'Portfolio - Inicio',
    component: HomeComponent,
  },
  {
    path: 'contact',
    title: 'Portfolio - Contato',
    component: ContactComponent,
  },
  {
    path: 'project',
    title: 'Portfolio - Projetos',
    component: ProjectComponent,
  },
  {
    path: 'about',
    title: 'Portfolio - Sobre mim',
    component: AboutComponent,
  },
];
