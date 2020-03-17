import { Injectable } from '@angular/core';
import { Action, select, Store, ActionsSubject } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as fromDogs from './dogs.reducer';
import * as dogsActions from './dogs.actions';
import * as dogsSelectors from './dogs.selector';
import { Dog } from '@dogs-ngrx/core-data';

@Injectable({
  providedIn: 'root'
})
export class DogsFacade {
  allDogs$ = this.store.pipe(select(dogsSelectors.selectAllDogs));
  selectedDog$ = this.store.pipe(select(dogsSelectors.selectDog));
  dogsLoading$ = this.store.pipe(select(dogsSelectors.selectDogsLoading));
  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === dogsActions.createDog({} as any).type ||
        action.type === dogsActions.updateDog({} as any).type ||
        action.type === dogsActions.deleteDog({} as any).type
    )
  );

  constructor(
    private actions$: ActionsSubject,
    private store: Store<fromDogs.DogsPartialState>
  ) {}

  selectDog(selectedDogId: string | number) {
    this.dispatch(dogsActions.dogSelected({ selectedDogId }));
  }

  loadDogs() {
    this.dispatch(dogsActions.loadDogs());
  }

  loadDog(dog: Dog) {
    this.dispatch(dogsActions.loadDog({ dog }));
  }

  createDog(dog: Dog) {
    this.dispatch(dogsActions.createDog({ dog }));
  }

  updateDog(dog: Dog) {
    this.dispatch(dogsActions.updateDog({ dog }));
  }

  deleteDog(dog: Dog) {
    this.dispatch(dogsActions.deleteDog({ dog }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
