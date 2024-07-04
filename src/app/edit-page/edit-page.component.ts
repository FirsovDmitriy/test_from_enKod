import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from '../state/cities.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { City } from '../state/cities.store';
import { FormComponent } from '../form/form.component';
import { StoreService } from '../store.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [ReactiveFormsModule, FormComponent],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.scss',
})
export class EditPageComponent implements OnInit {

  form = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    imageUrl: ['', Validators.required]
  })


  data: City | undefined;
  id: number = 1;

  constructor(
    private activateRoute: ActivatedRoute,
    private citiesService: CitiesService,
    private httpService: HttpService,
    private fb:FormBuilder,
    private store: StoreService
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.httpService
      .getCityById(this.id)
      .subscribe((resp:any) => {
        this.form.get('name')?.setValue(resp.name)
        this.form.get('description')?.setValue(resp.description)
        this.form.get('imageUrl')?.setValue(resp.image)

        this.data = resp
      })

    this.store.setTitlePage('Редактировать город')
  }

  onSubmit(event: Event) {
    event.preventDefault()

    this.citiesService.editCity({
      id: this.id,
      name: this.form.get('name')?.value,
      description: this.form.get('description')?.value,
      image: this.form.get('imageUrl')?.value
    })
  }
}
