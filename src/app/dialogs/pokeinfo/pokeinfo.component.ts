import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from '../../services/photo.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-pokeinfo',
  standalone: true,
  imports: [GalleriaModule, MatButtonModule, MatDialogModule],
  templateUrl: './pokeinfo.component.html',
  styleUrl: './pokeinfo.component.scss',
})
export class PokeinfoComponent implements OnInit {
  images: any[] | undefined;

  responsiveOptions: any[] | undefined;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getImages().then((images) => (this.images = images));
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }
}
