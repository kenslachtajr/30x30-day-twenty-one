import { createAction, props } from '@ngrx/store';
import { Dog } from '@dogs-ngrx/core-data';

export const dogSelected = createAction(
  '[DOG] Dog Selected',
  props<{ selectedDogId: string | number }>()
);

export const loadDogs = createAction('[DOG] Load Dogs');

export const dogsLoaded = createAction(
  '[DOG] Dog Loaded',
  props<{ dogs: Dog[] }>()
);

export const loadDog = createAction(
  '[DOG] Load Dog',
  props<{ dog: Dog }>()
);

export const dogLoaded = createAction(
  '[DOG] Dog Loaded',
  props<{ dog: Dog }>()
);

export const createDog = createAction(
  '[DOG] Create Dog',
  props<{ dog: Dog }>()
);

export const dogCreated = createAction(
  '[DOG] Dog Created',
  props<{ dog: Dog }>()
);

export const updateDog = createAction(
  '[DOG] Update Dog',
  props<{ dog: Dog }>()
);

export const dogUpdated = createAction(
  '[DOG] Dog Updated',
  props<{ dog: Dog }>()
);

export const deleteDog = createAction(
  '[DOG] Delete Dog',
  props<{ dog: Dog }>()
);

export const dogDeleted = createAction(
  '[DOG] Dog Deleted',
  props<{ dog: Dog }>()
);
