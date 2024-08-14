import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectComponent } from './components/project/project.component';
import { GuideButtonComponent } from './shared/shared-ui/guide-button/guide-button.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectComponent,
    GuideButtonComponent,
    ContactComponent,
    ExperienceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
  @ViewChild('loadProjectComponent') loadProjectComponent!: ElementRef;
}
