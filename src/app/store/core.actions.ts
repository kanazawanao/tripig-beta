import {  createAction, props } from '@ngrx/store';

export const setThemeColor: any = createAction(
  '[Core] setThemeColor',
  props<{ themeColor: string; }>()
);
