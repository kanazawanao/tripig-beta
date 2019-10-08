import { Place } from './place';
import { Observable } from 'rxjs';

export class Aria {
  id = '';
  title = '';
  ariaName = '';
  places?: Observable<Place[]>;
}
