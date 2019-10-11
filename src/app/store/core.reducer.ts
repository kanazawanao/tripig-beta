import { Action, createReducer, on } from '@ngrx/store';
import * as CoreActions from './core.actions';


export const storeFeatureKey = 'store';

export interface State {
  themeColor: string;
}

export const initialState: State = {
  themeColor: '',
};

const coreReducer = createReducer(
  initialState,
  on(CoreActions.setThemeColor, (state, { themeColor }: any) => {
    return {
      ...state,
      themeColor,
    };
  }),
);
export function reducer(state: State | undefined, action: Action): State {
  return coreReducer(state, action);
}

export const getThemeColor = (state: State) => state.themeColor;
