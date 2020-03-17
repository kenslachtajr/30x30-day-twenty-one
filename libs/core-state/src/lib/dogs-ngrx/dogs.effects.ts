import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as dogsActions from './dogs.actions';
import { DogsFacade } from './dogs.facade';
import { Dog, DogsService, NotifyService } from '@dogs-ngrx/core-data';
import { DogsPartialState } from './dogs.reducer';

@Injectable()
export class DogsEffects {
  loadDogs$ = createEffect(() =>
    this.dataPersistence.fetch(dogsActions.loadDogs, {
      run: (
        action: ReturnType<typeof dogsActions.loadDogs>,
        state: DogsPartialState
      ) => {
        return this.dogsService
          .all()
          .pipe(
            map((dogs: Dog[]) => dogsActions.dogsLoaded({ dogs }))
          );
      },
      onError: (action: ReturnType<typeof dogsActions.loadDogs>, error) => {
        this.notify.notification('Effect Load All Error', error);
      }
    })
  );

  loadDog$ = createEffect(() =>
    this.dataPersistence.fetch(dogsActions.loadDog, {
      run: (
        action: ReturnType<typeof dogsActions.loadDog>,
        state: DogsPartialState
      ) => {
        return this.dogsService
          .findOne(action.dog)
          .pipe(map((dog: Dog) => dogsActions.dogLoaded({ dog })));
      },
      onError: (action: ReturnType<typeof dogsActions.loadDog>, error) => {
        this.notify.notification('Effect Load Error', error);
      }
    })
  );

  selectDogOnLoad$ = createEffect(() =>
    this.dataPersistence.actions.pipe(
      ofType(dogsActions.dogLoaded),
      map(({ dog }) =>
        dogsActions.dogSelected({
          selectedDogId: dog.id
        })
      )
    )
  );

  createDog$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(dogsActions.createDog, {
      run: (
        action: ReturnType<typeof dogsActions.createDog>,
        state: DogsPartialState
      ) => {
        return this.dogsService
          .create(action.dog)
          .pipe(map((dog: Dog) => dogsActions.dogCreated({ dog })));
      },
      onError: (
        action: ReturnType<typeof dogsActions.createDog>,
        error
      ) => {
        this.notify.notification('Effect Create Error', error);
      }
    })
  );

  updateDog$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(dogsActions.updateDog, {
      run: (
        action: ReturnType<typeof dogsActions.updateDog>,
        state: DogsPartialState
      ) => {
        return of(action.dog).pipe(
          map((dog: Dog) => dogsActions.dogUpdated({ dog })),
          tap(() => this.notify.notification('Successfully updated a dog'))
        );
      },
      onError: (
        action: ReturnType<typeof dogsActions.updateDog>,
        error
      ) => {
        this.notify.notification('Effect Update Error', error);
      }
    })
  );

  deleteDog$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(dogsActions.deleteDog, {
      run: (
        action: ReturnType<typeof dogsActions.deleteDog>,
        state: DogsPartialState
      ) => {
        return of(action.dog).pipe(
          map((dog: Dog) => dogsActions.dogDeleted({ dog })),
          tap(() => this.notify.notification('Successfully deleted a dog'))
        );
      },
      onError: (
        action: ReturnType<typeof dogsActions.deleteDog>,
        error
      ) => {
        this.notify.notification('Effect Delete Error', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<DogsPartialState>,
    private dogsService: DogsService,
    private dogsFacade: DogsFacade,
    private notify: NotifyService
  ) {}
}
