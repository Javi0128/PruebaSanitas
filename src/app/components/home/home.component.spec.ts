import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HomeComponent } from './home.component';
import { FilterComponent } from '../filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagesService } from 'src/app/services/images.service';

export class ImagesServiceMock {
  getRandomImagesArray(){
    return [
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
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, FilterComponent ],
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

  it('should init array', () => {
    component.ngOnInit();

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
    ])
  });

  it('should filter images list', () => {
    component.ngOnInit();
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
