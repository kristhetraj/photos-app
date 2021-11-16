import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  photos: any[] = [];

  constructor(private photoService: PhotoService, private router: Router) {}

  ngOnInit() {
    this.photos = this.photoService.photos;
    if (this.photos.length === 0) {
      this.loadPhotos();
    }
  }

  loadPhotos() {
    for (let i = 0; i < 5; i++) {
      this.photoService.getPhoto();
    }
  }

  savePhoto(photo: any) {
    this.photoService.savePhoto(photo);
    this.router.navigate(['photo']);
  }
}
