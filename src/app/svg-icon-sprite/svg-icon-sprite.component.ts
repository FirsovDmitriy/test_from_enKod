import { Component, Input, computed, input } from '@angular/core';

const SVG_SPRITE_PATH = 'assets/sprites/sprite.svg'

@Component({
  selector: 'app-svg-icon-sprite',
  standalone: true,
  imports: [],
  templateUrl: './svg-icon-sprite.component.html',
  styleUrl: './svg-icon-sprite.component.scss'
})
export class SvgIconSpriteComponent {
  icon = input<string>()
  readonly sprite = computed(() => `${ SVG_SPRITE_PATH }#${ this.icon() }`)
}
