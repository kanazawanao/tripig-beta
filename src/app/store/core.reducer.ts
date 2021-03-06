import { Action, createReducer, on } from '@ngrx/store';
import * as CoreActions from './core.actions';
import { Aria } from '../models/aria';
import { Place } from '../models/place';


export const storeFeatureKey = 'store';

export interface State {
  themeColor: string;
  aria: Aria;
  searchedPlaceList: Place[];
  place: Place;
}

export const initialState: State = {
  themeColor: '',
  aria: new Aria(),
  searchedPlaceList: [],
  place: new Place(),
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
  on(CoreActions.setSearchedPlaceList, (state, { searchedPlaceList }: any) => {
    return {
      ...state,
      searchedPlaceList,
    };
  }),
  on(CoreActions.setPlace, (state, { place }: any) => {
    return {
      ...state,
      place,
    };
  }),
);
export function reducer(state: State | undefined, action: Action): State {
  return coreReducer(state, action);
}

export const getThemeColor = (state: State) => state.themeColor;
export const getAria = (state: State) => state.aria;
export const getSearchedPlaceList = (state: State) => state.searchedPlaceList;
export const getPlace = (state: State) => state.place;
