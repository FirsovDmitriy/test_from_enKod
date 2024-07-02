import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { StoreService } from '../store.service';
import { CitiesQuery } from '../state/cities.query';
import { CitiesService } from '../state/cities.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  constructor(
    private store: StoreService,
    private query: CitiesQuery,
    private citiesService: CitiesService
  ) {}

  ngOnInit(): void {
    this.store.setTitlePage('Список городов');

    this.citiesService.getData();
  }
}
