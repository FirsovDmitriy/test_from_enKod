import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgIconSpriteComponent } from '../../svg-icon-sprite/svg-icon-sprite.component';

@Component({
  selector: 'app-favorite-button',
  standalone: true,
  imports: [SvgIconSpriteComponent],
  templateUrl: './favorite-button.component.html',
  styleUrl: './favorite-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteButtonComponent {
  @Input() isFavorite: boolean = false
}
