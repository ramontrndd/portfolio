import { Component, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  menuItems = signal(<MenuItem[]>[
    {
      icon: 'home',
      label: 'inicio',
      route: 'home',
    },
    {
      icon: 'person',
      label: 'contato',
      route: 'contact',
    },
    {
      icon: 'computer',
      label: 'projetos',
      route: 'project',
    },
    {
      icon: 'account_circle',
      label: 'sobre mim',
      route: 'project',
    },
  ]);
}
