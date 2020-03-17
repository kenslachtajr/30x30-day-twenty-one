import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsItemComponent } from './dogs-item.component';

describe('DogsItemComponent', () => {
  let component: DogsItemComponent;
  let fixture: ComponentFixture<DogsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
