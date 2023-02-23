import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagesService } from 'src/app/services/images.service';
import { FilterInputComponent } from '../filter-input/filter-input.component';
import { of } from 'rxjs';

export class ImagesServiceMock {
  getRandomImages(){
    return of(
      [
        {
          id: '1',
          photo: 'https://picsum.photos/id/1/500/500.jpg',
          text: 'randomText'
        },
        {
          id: '2',
          photo: 'https://picsum.photos/id/2/500/500.jpg',
          text: 'randomText2'
        },
      ]
    )
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, FilterInputComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers:[
        {provide: ImagesService, useClass: ImagesServiceMock}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init array', fakeAsync(() => {
    tick();

    expect(component.imagesList).toEqual([
      {
        id: '1',
        photo: 'https://picsum.photos/id/1/500/500.jpg',
        text: 'randomText'
      },
      {
        id: '2',
        photo: 'https://picsum.photos/id/2/500/500.jpg',
        text: 'randomText2'
      },
    ]);

    expect(component.imagesListFix).toEqual([
      {
        id: '1',
        photo: 'https://picsum.photos/id/1/500/500.jpg',
        text: 'randomText'
      },
      {
        id: '2',
        photo: 'https://picsum.photos/id/2/500/500.jpg',
        text: 'randomText2'
      },
    ]);
  }));

  it('should filter images list', () => {
    component.filterChange('1');
    expect(component.imagesList).toEqual([
      {
        id: '1',
        photo: 'https://picsum.photos/id/1/500/500.jpg',
        text: 'randomText'
      },
    ])
  });
});
