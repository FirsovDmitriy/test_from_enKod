import { Component, Input, computed, input } from '@angular/core';
import { SvgIconSpriteComponent } from '../svg-icon-sprite/svg-icon-sprite.component';

@Component({
  selector: 'app-favorite-button',
  standalone: true,
  imports: [SvgIconSpriteComponent],
  templateUrl: './favorite-button.component.html',
  styleUrl: './favorite-button.component.scss'
})
export class FavoriteButtonComponent {
  @Input() isFavorite: boolean = false
}
