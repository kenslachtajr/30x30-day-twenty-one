import { Dog } from '@dogs-ngrx/core-data';
import { Component, Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'dogs-ngrx-dogs-details',
  templateUrl: './dogs-details.component.html',
  styleUrls: ['./dogs-details.component.scss']
})
export class DogsDetailsComponent {
  currentDog: Dog;
  originalTitle;
  @Input() set dog(value) {
    if (value) this.originalTitle = value.name;
    this.currentDog = Object.assign({}, value);
  }
  @Input() form;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
