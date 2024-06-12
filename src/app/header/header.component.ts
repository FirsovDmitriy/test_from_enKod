import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private store: StoreService) {}

  title() {
    return this.store.getTitlePage()
  }
}
