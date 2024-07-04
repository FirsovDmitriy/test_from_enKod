import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CitiesStore, City } from './cities.store';
import { HttpService } from '../http.service';

@Injectable({ providedIn: 'root' })
export class CitiesService {
  constructor(private citiesStore: CitiesStore, private http: HttpClient, private httpService:HttpService) {}

  getData() {
    this.httpService.getCitys().subscribe(resp => {
      this.citiesStore.set(resp);
    })
  }

  createCity(data: City) {

    this.httpService.createCity(data).subscribe(resp => {
      this.citiesStore.add(resp);
    })

    // .pipe(catchError(this.errorHandler));
  }

  editCity(data: any) {

    this.httpService.editCity(data).subscribe(resp => {
      this.citiesStore.update(data.id, resp)
    })
  }

  edit(id:number, favorite:boolean) {

    this.httpService.addFavorite(id, favorite).subscribe(resp => {
      this.citiesStore.update(id, { favorite })
    })
  }

  delete(id:number) {

    this.httpService.deleteCity(id).subscribe(reps => {
      this.citiesStore.remove(id)
    })
  }
}
