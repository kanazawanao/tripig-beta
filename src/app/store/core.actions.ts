import {  createAction, props } from '@ngrx/store';
import { Aria } from '../models/aria';
import { Place } from '../models/place';

export const setThemeColor: any = createAction(
  '[Core] setThemeColor',
  props<{ themeColor: string; }>()
);

export const setAria: any = createAction(
  '[Core] setAria',
  props<{ aria: Aria; }>()
);

export const setSearchedPlaceList: any = createAction(
  '[Core] setSearchedPlaceList',
  props<{ searchedPlaceList: Place[]; }>()
);
