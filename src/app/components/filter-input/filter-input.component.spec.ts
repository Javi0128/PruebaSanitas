import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FilterInputComponent } from '../filter-input/filter-input.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

export class FormBuilderMock {
  group() {
    return new FormGroup({
      imageFilter: new FormControl()
    })
  }
}

describe('FilterInputComponent', () => {
  let component: FilterInputComponent;
  let fixture: ComponentFixture<FilterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterInputComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        {provide: FormBuilder, useClass: FormBuilderMock}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterInputComponent);
    component = fixture.componentInstance;
    component.textChange = new EventEmitter();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init form', fakeAsync(() => {
    const textChangeSpy = spyOn(component.textChange, 'emit');

    component.filterForm.get('imageFilter')?.setValue('text');
    tick();
    expect(textChangeSpy).toHaveBeenCalled();
  }));
});
