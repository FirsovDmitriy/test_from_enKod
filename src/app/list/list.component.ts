import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { SvgIconSpriteComponent } from '../svg-icon-sprite/svg-icon-sprite.component';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, SvgIconSpriteComponent, FavoriteButtonComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Output() idEvent = new EventEmitter()

  constructor(private store: StoreService) {}

  items() {
    return this.store.getState()
  }

  getId(id:number) {
    this.idEvent.emit(id)
  }

}
