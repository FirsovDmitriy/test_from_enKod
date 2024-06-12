import { Injectable, signal } from '@angular/core';
import { City, cities } from '../cities.data';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  private state = signal(cities)
  private titlePage: string = ''

  getState() {
    return this.state()
  }

  getTitlePage() {
    return this.titlePage
  }

  setTitlePage(title: string) {
    this.titlePage = title
  }

  updateState(func: (arg: City[]) => City[]) {
    this.state.update(func)
  }
}
