import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  photo: any;

  constructor(private photoService: PhotoService, private router: Router) {}

  ngOnInit() {
    this.photo = this.photoService.savedPhoto;
  }

  back() {
    this.router.navigate(['']);
  }
}
