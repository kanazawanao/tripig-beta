import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor() {}

  getAllList() {
    return ['東京', 'NY', 'VN'];
  }
}
