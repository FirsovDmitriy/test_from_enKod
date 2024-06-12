import {
  Component,
  OnInit,
  WritableSignal,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { GridComponent } from '../grid/grid.component';
import { StoreService } from '../store.service';
import { Display } from './home-page.type';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, ListComponent, GridComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  readonly isVisible: WritableSignal<Display> = signal('list');

  constructor(
    private store: StoreService
  ) {}

  displayList() {
    this.isVisible.set('list');
    localStorage.setItem('display', 'list');
  }

  displayGrid() {
    this.isVisible.set('grid');
    localStorage.setItem('display', 'grid');
  }

  addFavorite(id: number) {
    this.store.updateState((value) =>
      value.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            favorite: !item.favorite,
          };
        } else return item;
      })
    );
  }

  ngOnInit(): void {
    this.store.setTitlePage('Список городов');
    const display = localStorage.getItem('display');

    if(display) {
      this.isVisible.set(display as Display)
    }
  }

  activeList() {
    return this.isVisible() === 'list';
  }

  activeGrid() {
    return this.isVisible() === 'grid';
  }
}
