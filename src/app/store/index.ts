import {
  ActionReducerMap,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromStore from './core.reducer';
import * as fromCore from './core.reducer';

export interface State {
  core: fromStore.State;
}

export const reducers: ActionReducerMap<State> = {
  core: fromStore.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectCore = (state: State) => state.core;
export const getThemeColor = createSelector(selectCore, fromCore.getThemeColor);
