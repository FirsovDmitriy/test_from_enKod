import { Injectable } from '@angular/core';
import { Query, QueryEntity } from '@datorama/akita';
import { CitiesStore, City } from './cities.store';

@Injectable({ providedIn: 'root' })
export class CitiesQuery extends QueryEntity<City> {

  cities$ = this.selectAll()

  constructor(protected override store: CitiesStore) {
    super(store);
  }
}
