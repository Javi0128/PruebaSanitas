import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  imagesList: Image[] = [];
  imagesListFix: Image[] = [];

  imagesSubscription: Subject<void> = new Subject<void>();

  constructor(private imagesService: ImagesService) {}

  // OPTION 1
  // async ngOnInit() {
  //   this.imagesList = await firstValueFrom(this.imagesService.getRandomImages());
  //   this.imagesListFix = this.imagesList;
  // }

  // OPTION 2
  ngOnInit() {
    this.imagesService.getRandomImages()
      .pipe(takeUntil(this.imagesSubscription))
      .subscribe(images => {
        this.imagesList = images;
        this.imagesListFix = this.imagesList;
      });
  }

  filterChange(text: string): void {
    if (!text) {
      this.imagesList = this.imagesListFix;
      return;
    }

    this.imagesList = this.imagesListFix.filter(image => image.id.includes(text) || image.text.toLowerCase().includes(text.toLowerCase()));
  }

  ngOnDestroy(): void {
      this.imagesSubscription.next();
      this.imagesSubscription.complete();
  }
}
