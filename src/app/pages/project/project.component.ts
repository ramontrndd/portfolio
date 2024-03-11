import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { PhotoService } from '../../services/photo.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PokeinfoComponent } from '../../dialogs/pokeinfo/pokeinfo.component';
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
  images: any[] | undefined;

  responsiveOptions: any[] | undefined;

  constructor(private photoService: PhotoService,
    private dialog:MatDialog) {}

  ngOnInit() {}

  moreInfo() { 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '650px';
    this.dialog.open(PokeinfoComponent, dialogConfig)
  }
}
