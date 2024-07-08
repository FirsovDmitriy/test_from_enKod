import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SvgIconSpriteComponent } from '../svg-icon-sprite/svg-icon-sprite.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { StoreService } from '../store.service';
import { CitiesService } from '../state/cities.service';
import { City } from '../state/cities.store';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [ReactiveFormsModule, SvgIconSpriteComponent, FormComponent],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePageComponent implements OnInit {
  form = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    imageUrl: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private store: StoreService,
    private citiesService: CitiesService,
    private fb: FormBuilder
  ) {}

  goBack() {
    this.router.navigate(['/list']);
  }

  onSubmit() {
    const item = {
      id: Date.now(),
      name: this.form.get('name')?.value,
      description: this.form.get('description')?.value,
      image: this.form.get('imageUrl')?.value,
      favorite: false,
    } as City;

    this.citiesService.createCity(item);

    this.router.navigate(['/list']);
  }

  ngOnInit(): void {
    this.store.setTitlePage('Создание города');
  }
}
