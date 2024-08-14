import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Card } from '../../shared/models/Card';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
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
      image: 'github-brands-solid.svg',
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

  ngOnInit() {
    // Duplicate the items to create an infinite scroll effect
    this.cardSKills = [...this.cardSKills, ...this.cardSKills];
  }

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
