import { Action, createReducer, on } from '@ngrx/store';
import * as CoreActions from './core.actions';
import { Aria } from '../models/aria';


export const storeFeatureKey = 'store';

export interface State {
  themeColor: string;
  aria: Aria;
}

export const initialState: State = {
  themeColor: '',
  aria: new Aria,
};

const coreReducer = createReducer(
  initialState,
  on(CoreActions.setThemeColor, (state, { themeColor }: any) => {
    return {
      ...state,
      themeColor,
    };
  }),
  on(CoreActions.setAria, (state, { aria }: any) => {
    return {
      ...state,
      aria,
    };
  }),
);
export function reducer(state: State | undefined, action: Action): State {
  return coreReducer(state, action);
}

export const getThemeColor = (state: State) => state.themeColor;
export const getAria = (state: State) => state.aria;
