import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dog } from '@dogs-ngrx/core-data';

@Component({
  selector: 'dogs-ngrx-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent {
  @Input() dogs: Dog[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
