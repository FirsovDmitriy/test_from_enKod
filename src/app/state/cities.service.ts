import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CitiesStore, City } from './cities.store';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';

const BASE_API_URL = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class CitiesService {
  constructor(private citiesStore: CitiesStore, private http: HttpClient) {}

  getData() {
    this.http.get(`${ BASE_API_URL }`).subscribe((resp) => {
      this.citiesStore.set(resp);

      console.log('Resp', resp);
    });
  }

  createCity(data: City) {
    this.http
      .post(`${BASE_API_URL}`, data)
      .subscribe(resp => {
        this.citiesStore.add(resp);

        console.log('Post', resp)
      })

      // .pipe(catchError(this.errorHandler));
  }

  editCity(data: any) {
    this.http.patch(`${ BASE_API_URL }/${ data.id }`, { ...data }).subscribe(resp => {
      this.citiesStore.update(data.id, resp)

      console.log(resp)
    })
  }

  edit(id:number, favorite:boolean) {
    this.http.patch(`${ BASE_API_URL }/${ id }`, { favorite }).subscribe(resp => {
      this.citiesStore.update(id, { favorite })

      console.log('edit', resp)
    })
  }

  delete(id:number) {
    this.http.delete(`${ BASE_API_URL }/${ id }`).subscribe(resp => {
      this.citiesStore.remove(id)
      console.log('Delete', id)
    })
  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message);
  }
}
