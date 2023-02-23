import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.css']
})
export class FilterInputComponent implements OnInit {

  @Output() textChange = new EventEmitter();

  filterForm = this.formBuilder.group({
    imageFilter: ['']
  })

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (this.filterForm) {
      this.filterForm?.get('imageFilter')?.valueChanges
      .subscribe(text => {
          this.textChange.emit(text);
      })
    }
  }

}
