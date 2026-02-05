import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherapiService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max&hourly=temperature_2m,relative_humidity_2m,rain,snowfall,precipitation,precipitation_probability,apparent_temperature&current=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,is_day';



  }

