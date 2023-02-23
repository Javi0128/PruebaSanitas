import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  imagesList: Image[] = [];
  imagesListFix: Image[] = [];

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesList = this.imagesService.getRandomImagesArray();
    this.imagesListFix = this.imagesList;
  }

  filterChange(text: string): void {
    if (!text) {
      this.imagesList = this.imagesListFix;
      return;
    }

    this.imagesList = this.imagesListFix.filter(image => image.id.includes(text) || image.text.toLowerCase().includes(text.toLowerCase()));
  }
}
