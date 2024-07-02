import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface City extends EntityState {
  id: number
  image: string
  name: string
  description: string
  favorite: boolean
}

const initialState = {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cities' })
export class CitiesStore extends EntityStore<City> {
  constructor() {
    super(initialState);
  }
}
