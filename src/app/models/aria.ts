import { Place } from './place';
import { Observable } from 'rxjs';

export class Aria {
  id = '';
  ariaName = '';
  places?: Observable<Place[]>;
}
