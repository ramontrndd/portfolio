import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { Project } from '../../shared/models/Project';
import { CommonModule, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    SlicePipe,
    CommonModule,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  textLimit = 200; // Defina o limite de caracteres
  expanded: boolean[] = []; // Array para controlar a expansão de cada card

  constructor() {
    this.expanded = Array(this.projects.length).fill(false);
  }

  toggleText(index: number) {
    this.expanded[index] = !this.expanded[index];
  }

  projects: Project[] = [
    {
      title: 'Cafeteria',
      image: 'cafeteria.png',
      alt: 'imagem de um dashboard',
      description:
        'Este projeto inovador visa otimizar a gestão de cafeterias através de uma aplicação robusta e intuitiva. Desenvolvido com tecnologia Node.js para o backend e formulários reativos para uma experiência de usuário dinâmica, oferece uma plataforma completa para gerenciar pedidos, adicionar produtos, e até mesmo gerar PDFs de pedidos com facilidade. Verifique a documentação do projeto e faça o teste da aplicação clicando em DEMO',
      label: ['Angular', 'Angular Material', 'HTML', 'SCSS'],
      github: 'https://github.com/ramontrndd/cafe-management-front',
      demo: 'https://ramontrndd.github.io/cafe-management-front/',
    },
    {
      title: 'Tela de login',
      image: 'tela-login.png',
      alt: 'imagem de tela de login',
      description:
        'Este projeto foi desenvolvido para ilustrar a funcionalidade de uma tela de login em uma aplicação. Nele, ao realizar o login, a chave Token do usuário é armazenada nos cookies. Além disso, foi implementado o Router-Guard do Angular, garantindo que, caso essa chave esteja vazia ou nula, o usuário seja automaticamente redirecionado para a tela de login, verifique a documentação e faça o teste da aplicação clicando em DEMO',
      label: ['Angular', 'Angular Material', 'Html', 'Scss'],
      github: 'https://github.com/ramontrndd/login-screen',
      demo: 'https://ramontrndd.github.io/login-screen/',
    },
  ];
}
