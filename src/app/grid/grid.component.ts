import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { City } from '../../cities.data';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [FavoriteButtonComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  // items = input<City[]>([])
  constructor(private store: StoreService) {}
  @Output() idEvent = new EventEmitter()

  getId(id: number) {
    this.idEvent.emit(id)
  }

  items() {
    return this.store.getState()
  }
}
