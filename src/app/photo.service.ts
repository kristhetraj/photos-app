import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
  savedPhoto: any;

  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get<any>('https://picsum.photos/200', {
      responseType: 'blob' as 'json',
    });
  }

  savePhoto(photo: any) {
    this.savedPhoto = photo;
  }
}
