import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as dogsActions from './dogs.actions';
import { Dog } from '@dogs-ngrx/core-data';

export const DOGS_FEATURE_KEY = 'dogs';

export interface DogsState extends EntityState<Dog> {
  selectedDogId?: string | number;
  isLoading: boolean;
}

export interface DogsPartialState {
  readonly [DOGS_FEATURE_KEY]: DogsState;
}

export const dogsAdapter: EntityAdapter<
Dog> = createEntityAdapter<Dog>();

export const initialState: DogsState = dogsAdapter.getInitialState(
  {
    selectedDogId: null,
    isLoading: false
  }
);

const dogsReducer = createReducer(
  initialState,
  on(
    dogsActions.dogSelected,
    (state, { selectedDogId }) =>
      Object.assign({}, state, { selectedDogId })
  ),
  on(dogsActions.dogsLoaded, (state, { dogs }) =>
  dogsAdapter.setAll(dogs, { ...state, isLoading: false })
  ),
  on(dogsActions.dogCreated, (state, { dog }) =>
  dogsAdapter.addOne(dog, { ...state, isLoading: false })
  ),
  on(dogsActions.dogUpdated, (state, { dog }) =>
  dogsAdapter.upsertOne(dog, { ...state, isLoading: false })
  ),
  on(dogsActions.dogDeleted, (state, { dog }) =>
  dogsAdapter.removeOne(dog.id, {
      ...state,
      isLoading: false
    })
  ),
  on(
    dogsActions.loadDogs,
    dogsActions.createDog,
    dogsActions.updateDog,
    dogsActions.deleteDog,
    state => ({
      ...state,
      isLoading: true
    })
  )
);

export function reducer(state: DogsState | undefined, action: Action) {
  return dogsReducer(state, action);
}
