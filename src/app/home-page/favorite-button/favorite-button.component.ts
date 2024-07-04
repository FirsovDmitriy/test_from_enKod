import { Component, Input } from '@angular/core';
import { SvgIconSpriteComponent } from '../../svg-icon-sprite/svg-icon-sprite.component';
import { CitiesService } from '../../state/cities.service';
import { City } from '../../state/cities.store';

@Component({
  selector: 'app-favorite-button',
  standalone: true,
  imports: [SvgIconSpriteComponent],
  templateUrl: './favorite-button.component.html',
  styleUrl: './favorite-button.component.scss'
})
export class FavoriteButtonComponent {
  @Input() item: City = {
    id: 0,
    image: '',
    name: '',
    description: '',
    favorite: false
  }

  constructor(private citiesService:CitiesService) {}

  favorite() {
    const isFavorite = !this.item.favorite
    this.citiesService.edit(this.item.id, isFavorite)
  }
}
