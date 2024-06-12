import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SvgIconSpriteComponent } from '../svg-icon-sprite/svg-icon-sprite.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { City } from '../../cities.data';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [ReactiveFormsModule, SvgIconSpriteComponent],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.scss'
})
export class CreatePageComponent implements OnInit {
  name = new FormControl('')
  description = new FormControl('')
  imageUrl = new FormControl('')

  constructor(private router: Router, private store: StoreService ) {}

  goBack() {
    this.router.navigate([""])
  }

  onSubmit(event: Event) {
    event.preventDefault()

    const item = {
      id: Date.now(),
      name: this.name.value,
      description: this.description.value,
      image: this.imageUrl.value,
      favorite: false
    } as City

    this.store.updateState(value => [...value, item])

    this.router.navigate([""])
  }

  ngOnInit(): void {
    this.store.setTitlePage('Создание города')
  }
}
