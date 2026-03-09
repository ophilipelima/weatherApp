import { Injectable, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingApiService {

  @Input() nomeLugar?: string;

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://geocoding-api.open-meteo.com/v1/search';

  get(name: string):Observable<any>{
    return this.http.get(this.apiUrl,{
      params: {
        name: `${this.nomeLugar}`,
        language: 'pt'
      }
    });
  }
}
