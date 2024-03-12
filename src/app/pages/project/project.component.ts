import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    GalleriaModule,
    MatCardModule,
    FieldsetModule,
    AvatarModule,
    MatButtonModule,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
