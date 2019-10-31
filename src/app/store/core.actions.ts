import {  createAction, props } from '@ngrx/store';
import { Aria } from '../models/aria';

export const setThemeColor: any = createAction(
  '[Core] setThemeColor',
  props<{ themeColor: string; }>()
);

export const setAria: any = createAction(
  '[Core] setAria',
  props<{ aria: Aria; }>()
);