import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from '../state/cities.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { City } from '../state/cities.store';
import { FormComponent } from '../form/form.component';
import { StoreService } from '../store.service';
import { HttpService } from '../http.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [ReactiveFormsModule, FormComponent],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPageComponent implements OnInit {
  form = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    imageUrl: ['', Validators.required],
  });

  id: number = 1;

  constructor(
    private activateRoute: ActivatedRoute,
    private citiesService: CitiesService,
    private httpService: HttpService,
    private fb: FormBuilder,
    private store: StoreService
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.httpService
      .getCityById(this.id)
      .pipe(
        catchError((error) => {
          console.log('Error...', error);
          return of(undefined);
        })
      )
      .subscribe((city: City | undefined) => {
        if (city) {
          this.form.patchValue({
            name: city.name,
            description: city.description,
            imageUrl: city.image,
          });
        } else {
          console.log('Data is undefined');
        }
      });

    this.store.setTitlePage('Редактировать город');
  }

  onSubmit() {
    this.citiesService.editCity({
      id: this.id,
      name: this.form.get('name')?.value,
      description: this.form.get('description')?.value,
      image: this.form.get('imageUrl')?.value,
    });
  }
}
