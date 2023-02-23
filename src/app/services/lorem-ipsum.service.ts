import { Injectable } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';

@Injectable({
  providedIn: 'root'
})
export class LoremIpsumService {

  private lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

  constructor() { }

  getRandomText(): string {
    return this.lorem.generateSentences(1);
  }
}
