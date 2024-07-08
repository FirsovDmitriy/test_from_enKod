import { AfterContentChecked, ChangeDetectionStrategy, Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(private store: StoreService) {}

  title() {
    return this.store.getTitlePage()
  }
}
