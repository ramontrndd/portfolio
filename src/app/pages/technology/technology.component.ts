import { Component, OnInit } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [
    ProgressBarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
  ],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
})
export class TechnologyComponent implements OnInit {
  ngOnInit(): void {}
}
