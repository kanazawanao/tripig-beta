import { Place } from './place';
import { Observable } from 'rxjs';

export class Aria {
  id = '';
  title = '';
  ariaName = '';
  gid = '';
  places?: Observable<Place[]>;
}
