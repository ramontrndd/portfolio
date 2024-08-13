import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Project } from '../../shared/models/Project';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  projects: Project[] = [
    {
      title: 'Project 1',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      alt: 'Project 1',
      description: 'This is the first project',
      label: ['Angular', 'Docker', 'Node.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];
}
