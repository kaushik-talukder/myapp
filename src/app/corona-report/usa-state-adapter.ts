import {Injectable} from '@angular/core';
import {Adapter} from '../adapter';
import {UsaState} from './usa-state';

@Injectable({
  providedIn: 'root'
})
export class UsaStateAdapter implements Adapter<UsaState>{
  adapt(item: any): UsaState {
    return new UsaState(item.name, item.abbreviation);
  }
}
