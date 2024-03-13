import { Component, Input, computed, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { RouterModule } from '@angular/router';


export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule,RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  sideNavCollapsed = signal(false)

  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  profilePicSize =  computed (()=> this.sideNavCollapsed() ? '32' : '100')


  menuItems = signal(<MenuItem[]>[
    {
      icon: 'home',
      label: 'inicio',
      route: 'home',
    },
    {
      icon: 'computer',
      label: 'Tecnologias',
      route: 'technology',
    },
    {
      icon: 'manage_accounts',
      label: 'projetos',
      route: 'project',
    },
    {
      icon: 'account_circle',
      label: 'contato',
      route: 'contact',
    },
    {
      icon: 'person',
      label: 'sobre mim',
      route: 'about',
    },
  ]);


}
