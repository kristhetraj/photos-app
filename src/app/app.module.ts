import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PhotoService } from './photo.service';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, PhotosComponent, PhotoComponent],
  bootstrap: [AppComponent],
  providers: [PhotoService],
})
export class AppModule {}
