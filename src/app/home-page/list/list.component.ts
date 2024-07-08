import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIconSpriteComponent } from '../../svg-icon-sprite/svg-icon-sprite.component';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { StoreService } from '../../store.service';
import { CitiesQuery } from '../../state/cities.query';
import { City } from '../../state/cities.store';
import { CitiesService } from '../../state/cities.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, SvgIconSpriteComponent, FavoriteButtonComponent, AsyncPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  items: Observable<City[]> = new Observable()

  constructor(private query: CitiesQuery,
    private citiesService: CitiesService ) {}

  ngOnInit(): void {
    this.items = this.query.cities$
  }

  delete(id:number) {
    this.citiesService.delete(id)
  }

  addFavorite(id:number, isFavorite:boolean) {
    this.citiesService.edit(id, !isFavorite)
  }
}
