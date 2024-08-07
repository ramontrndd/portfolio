import { Component, ElementRef, ViewChild } from '@angular/core';

import { Card } from '../../shared/models/Card';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  cardSKills: Card[] = [
    {
      title: 'Angular',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    },
    {
      title: 'Docker',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    },
    {
      title: 'Node.js',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    },
    {
      title: 'MySQL',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    },
    {
      title: 'HTML',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    },
    {
      title: 'CSS',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    },
    {
      title: 'JavaScript',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    },
    {
      title: 'Tailwind CSS',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      title: 'Git',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    },
    {
      title: 'GitHub',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    },
    {
      title: 'Bootstrap',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    },
    {
      title: 'TypeScript',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    },
  ];

  @ViewChild('carouselInner') carouselInner!: ElementRef;

  pauseAnimation() {
    if (this.carouselInner) {
      this.carouselInner.nativeElement.style.animationPlayState = 'paused';
    }
  }

  resumeAnimation() {
    if (this.carouselInner) {
      this.carouselInner.nativeElement.style.animationPlayState = 'running';
    }
  }
}
