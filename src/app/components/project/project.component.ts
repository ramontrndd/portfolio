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
    {
      title: 'Cafeteria - Backend',
      image: 'back-end2.svg',
      alt: 'imagem de tela de login',
      description:
        'Este projeto é um backend em Node.js com Express para CRUD em MySQL, foi desenvolvido com intuito de completar o meu projeto fullstack da Cafeteria, ele também faz geração de PDFs com Puppeteer, autenticação JWT, e uso de Docker para portabilidade. Usa EJS para templates HTML e dotenv para segurança de variáveis sensíveis, verifique a documentação e faça o teste da aplicação clicando em DEMO',
      label: ['NodeJS', 'Express', 'MySQL', 'JWT', 'Docker'],
      github: 'https://github.com/ramontrndd/cafe-management-backend',
      demo: 'https://github.com/ramontrndd/cafe-management-backend',
    },
    {
      title: 'Tucuju Previ',
      image: 'tucujuprevi.png',
      alt: 'apresetanção do projeto Tucuju Previ',
      description:
        'Projeto consiste no desenvolvimento de uma landing page, para uma empresa de serviços previdenciários administrativos. A página foi criada para refletir a missão da empresa de garantir o acesso justo e eficiente aos direitos previdenciários de seus cliente, com um design intuitivo e dinamico visa que seus usuários tenham uma boa experiencia. Verifique a documentação do projeto e faça o teste da aplicação clicando em DEMO',
      label: ['Angular', 'Angular Material', 'HTML', 'SCSS'],
      github: 'https://github.com/ramontrndd/tucujuprevi',
      demo: 'https://www.tucujuprevi.com',
    },
    {
      title: 'Tela login - Backend',
      image: 'back-end1.svg',
      alt: 'imagem de tela de login',
      description:
        'Este projeto consiste em um backend para uma tela de login. O backend foi desenvolvido em Node.js com Express, utilizando bcryptjs para criptografia de senhas e cookie-parser para manipulação de cookies. Ele permite aos usuários realizar cadastro, recuperação de senha e login de forma segura. Após o login, usuários aprovados têm acesso a um dashboard onde podem aprovar outros usuários. Verifique a documentação e faça o teste da aplicação clicando em DEMO.',
      label: ['NodeJS', 'Express', 'MySQL', 'JWT', 'Docker'],
      github: 'https://github.com/ramontrndd/login-backend',
      demo: 'https://github.com/ramontrndd/login-backend',
    },
    {
      title: 'Marketplace de Filmes',
      image: 'marketplace-angular.png',
      alt: 'menu de filmes',
      description:
        'Este projeto visa transformar a experiência de compra online, integrando tecnologias avançadas para criar um ambiente de compras mais eficiente e dinâmico. Utilizando Angular 17, implementei uma API Rest para acesso instantâneo a um vasto catálogo de produtos, com informações atualizadas em tempo real. Verifique a documentação do projeto e faça o teste da aplicação clicando em DEMO',
      label: ['Angular', 'Angular Material', 'HTML', 'SCSS'],
      github: 'https://github.com/ramontrndd/marketplace-angular',
      demo: 'https://ramontrndd.github.io/marketplace-angular/home',
    },
  ];
}
