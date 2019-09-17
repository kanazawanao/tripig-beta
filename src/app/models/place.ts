import { UserGroup } from './user-group';

export class Place {
  id = '';
  uId = '';
  gid = '';
  place = '';
  prefecture = '';
  addr = '';
  went = false;
  price = 0;
  category: string[] = [];
  open?: Date;
  close?: Date;
}
