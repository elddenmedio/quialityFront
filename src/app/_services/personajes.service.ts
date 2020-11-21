import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PersonajeInterface, GeneralInterface } from 'src/app/_interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(
    private http: HttpClient
  ) { }

  getInfo(page, filter: string = null): Observable<GeneralInterface> {
    return (filter)
      ? this.http.get<GeneralInterface>(environment.swapi_endpoint_api + 'people', { params: { search: filter } })
      : this.http.get<GeneralInterface>(environment.swapi_endpoint_api + 'people', { params: { page: page.toString() } });
  }

  getSpecificInfo(person: string): Observable<PersonajeInterface> {
    return this.http.get<PersonajeInterface>(environment.swapi_endpoint_api + 'people/' + person)
  }

  getResidentes(page: number, filter: string = null): Observable<GeneralInterface> {
    return (filter)
      ? this.http.get<GeneralInterface>(environment.swapi_endpoint_api + 'planets', { params: { search: filter } })
      : this.http.get<GeneralInterface>(environment.swapi_endpoint_api + 'planets', { params: { page: page.toString() } });
  }
}
