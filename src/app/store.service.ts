import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  private titlePage: string = ''

  getTitlePage() {
    return this.titlePage
  }

  setTitlePage(title: string) {
    this.titlePage = title
  }

}
