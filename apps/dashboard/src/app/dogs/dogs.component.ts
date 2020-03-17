import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyService, Dog, emptyDog } from '@dogs-ngrx/core-data';
import { DogsFacade } from '@dogs-ngrx/core-state';
import { Observable } from 'rxjs';
@Component({
  selector: 'dogs-ngrx',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  form: FormGroup;
  selectedDog$: Observable<Dog> = this.dogsFacade.selectedDog$;
  dogs$: Observable<Dog[]> = this.dogsFacade.allDogs$;

  constructor(
    private dogsFacade: DogsFacade,
    private formbuilder: FormBuilder,
    private notify: NotifyService
  ) {}

  ngOnInit() {
    this.initForm();
    this.dogsFacade.loadDogs();
    this.dogsFacade.mutations$.subscribe(() => this.resetDog());
  }

  selectDog(dog: Dog) {
    this.dogsFacade.selectDog(dog.id);
    this.form.patchValue(dog);
  }

  resetDog() {
    this.form.reset();
    this.selectDog(emptyDog);
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).setErrors(null);
    });
  }

  createDog() {
    this.notify.notification(`You have created ${this.form.value.name}`);
    this.dogsFacade.createDog(this.form.value);
  }

  cancel() {
    this.resetDog();
    this.form.reset();
  }

  saveDog(dog: Dog) {
    if (dog.id) {
      this.updateDog();
    } else {
      this.createDog();
    }
  }

  updateDog() {
    this.notify.notification(`You have updated ${this.form.value.name}`);
    this.dogsFacade.updateDog(this.form.value);
  }

  deleteDog(dog: Dog) {
    this.notify.notification(`You have deleted ${dog.name}`);
    this.dogsFacade.deleteDog(dog);
  }

  private initForm() {
    this.form = this.formbuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])],
      tasteLevel: '',
      approved: null
    });
  }
}
