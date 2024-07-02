import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { City } from '../state/cities.store';
import { CitiesQuery } from '../state/cities.query';
import { SvgIconSpriteComponent } from '../svg-icon-sprite/svg-icon-sprite.component';
import { CitiesService } from '../state/cities.service';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [FavoriteButtonComponent, SvgIconSpriteComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit {
  @Output() idEvent = new EventEmitter()
  cities: City[] = []

  constructor(private query:CitiesQuery, private citiesService:CitiesService) {}

  ngOnInit(): void {
    this.query.cities$.subscribe(cities => {
      this.cities = cities
    })
  }

  delete(id:number) {
    this.citiesService.delete(id)
  }
}
