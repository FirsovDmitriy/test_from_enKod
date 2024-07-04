import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { City } from './state/cities.store';

const BASE_API_URL = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}

  getCitys() {
    return this.http.get(`${ BASE_API_URL }`)
  }

  getCityById(id:number) {
    return this.http.get(`${BASE_API_URL}/${id}`);
  }

  createCity(data: City) {
    return this.http
      .post(`${BASE_API_URL}`, data)

      // .pipe(catchError(this.errorHandler));
  }

  editCity(data: City) {
    return this.http.patch(`${ BASE_API_URL }/${ data.id }`, data)
  }

  addFavorite(id:number, favorite:boolean) {
    return this.http.patch(`${ BASE_API_URL }/${ id }`, { favorite })
  }

  deleteCity(id:number) {
    return this.http.delete(`${ BASE_API_URL }/${ id }`)
  }
}
