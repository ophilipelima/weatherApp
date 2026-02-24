import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherapiService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,precipitation,apparent_temperature,is_day,weather_code,wind_speed_10m';

  getWeather(lat: number, lon: number): Observable<any>{
    return this.http.get(this.baseUrl, {
      params:{
        latitude: lat,
        longitude: lon,
        current: 'temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,is_day',
        hourly: 'temperature_2m',
        daily: 'temperature_2m_max,temperature_2m_min',
        timezone: 'auto'
      }
    });
  }

  }

