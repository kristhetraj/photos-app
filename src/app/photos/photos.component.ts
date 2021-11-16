import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  images: any[] = [];

  constructor(private photoService: PhotoService, private router: Router) {}

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.loadPhoto();
    }
  }

  savePhoto(photo: any) {
    this.photoService.savePhoto(photo);
    this.router.navigate(['photo']);
  }

  loadPhoto() {
    this.photoService.getPhotos().subscribe((blob) => {
      console.log('blob', blob);
      this.getImage(blob);
    });
  }

  async getImage(blob: any) {
    this.images.push(await this.createImageFromBlob(blob));
    // console.log('this.image', this.image);
  }

  createImageFromBlob(image: Blob): Promise<string | ArrayBuffer> {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.addEventListener(
        'load',
        () => {
          resolve(reader.result);
        },
        false
      );

      if (image) {
        reader.readAsDataURL(image);
      } else {
        reject();
      }
    });
  }
}
