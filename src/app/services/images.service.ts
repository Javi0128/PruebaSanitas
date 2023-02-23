import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Image } from '../models/image.interface';
import { LoremIpsumService } from './lorem-ipsum.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private apiUrl = 'https://picsum.photos';
  private numberOfElements = 4000;

  constructor(private loremIpsumService: LoremIpsumService) { }

  getRandomImages(): Observable<Image[]> {
    const allImagesList = [];

    for (let element = 0; element < this.numberOfElements; element++) {
      const random = Math.round(Math.random() * 200 + 1);

      const image: Image = {
        id: element.toString(),
        photo: `${this.apiUrl}/id/${random}/500/500.jpg`,
        text: this.loremIpsumService.getRandomText()
      }

      allImagesList.push(image);
    }

    return of(allImagesList);
  }
}
