import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
  savedPhoto: any;
  photos: any[] = [];

  constructor(private http: HttpClient) {}

  getPhoto() {
    this.http
      .get<any>('https://picsum.photos/200', {
        responseType: 'blob' as 'json',
      })
      .subscribe((blob) => {
        console.log('blob', blob);
        this.getImage(blob);
      });
  }

  savePhoto(photo: any) {
    this.savedPhoto = photo;
  }

  async getImage(blob: any) {
    this.photos.push(await this.createImageFromBlob(blob));
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
