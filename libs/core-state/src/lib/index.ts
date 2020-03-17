import { ActionReducerMap } from '@ngrx/store';
import * as fromDogs from './dogs-ngrx/dogs.reducer';

export interface AppState {
  dogs: fromDogs.DogsState;
}

export const reducers: ActionReducerMap<AppState> = {
  dogs: fromDogs.reducer
};

export const defaultState: AppState = {
  dogs: { ids: [] } as fromDogs.DogsState
};
