import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit {

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
