import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  getData() {
    return [
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primeng/images/galleria/galleria10s.jpg',
        alt: 'Description for Image 10',
        title: 'Title 10',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primeng/images/galleria/galleria11s.jpg',
        alt: 'Description for Image 11',
        title: 'Title 11',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primeng/images/galleria/galleria12.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primeng/images/galleria/galleria12s.jpg',
        alt: 'Description for Image 12',
        title: 'Title 12',
      },
    ];
  }

  getImages() {
    return Promise.resolve(this.getData());
  }
}
