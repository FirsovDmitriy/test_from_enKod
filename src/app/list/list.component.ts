import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SvgIconSpriteComponent } from '../svg-icon-sprite/svg-icon-sprite.component';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { StoreService } from '../store.service';
import { CitiesQuery } from '../state/cities.query';
import { City } from '../state/cities.store';
import { CitiesService } from '../state/cities.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, SvgIconSpriteComponent, FavoriteButtonComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  items: City[] = []

  constructor(private store: StoreService,
    private query: CitiesQuery, private citiesService: CitiesService
  ) {}

  ngOnInit(): void {
    this.query.cities$.subscribe(cities => {
      this.items = [...cities]
    })
  }

  delete(id:number) {
    this.citiesService.delete(id)
  }

}
