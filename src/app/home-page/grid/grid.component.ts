import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { City } from '../../state/cities.store';
import { CitiesQuery } from '../../state/cities.query';
import { SvgIconSpriteComponent } from '../../svg-icon-sprite/svg-icon-sprite.component';
import { CitiesService } from '../../state/cities.service';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [FavoriteButtonComponent, SvgIconSpriteComponent, RouterLink, AsyncPipe],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  @Output() idEvent = new EventEmitter()
  cities: Observable<City[]> = new Observable()

  constructor(private query:CitiesQuery, private citiesService:CitiesService) {}

  ngOnInit(): void {
    this.query.cities$.subscribe(cities => {
      // this.cities = cities
    })

    this.cities = this.query.cities$
  }

  delete(id:number) {
    this.citiesService.delete(id)
  }

  addFavorite(id:number, isFavorite:boolean) {
    this.citiesService.edit(id, !isFavorite)
  }
}
