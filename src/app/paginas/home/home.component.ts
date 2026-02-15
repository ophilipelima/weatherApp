import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../../service/weatherapi.service';
import { HeaderComponent } from '../../components/header/header.component';
import { CurrentWeatherComponent } from '../../components/current-weather/current-weather.component';
import { LoadingStateComponent } from '../../components/loading-state/loading-state.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CurrentWeatherComponent, LoadingStateComponent],
  templateUrl: './home.component.html',   
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private weatherService: WeatherapiService){}

  city = '';
  temperature?: number;
  wind?: number;
  humidity?: number;
  precipitation?: number; 
  isDay?: number;
  feelsLike?: number;
  

  ngOnInit(): void {
    this.carregarTempo(-15.7797, -47.9297);
  }

  carregarTempo(lat: number, long: number){
    this.weatherService.getWeather(lat, long).subscribe(
      {
        next: (resposta) => {
        this.temperature = Math.round(resposta[1].current?.temperature_2m);
        this.humidity = resposta[1].current?.relative_humidity_2m;
        this.wind = Math.round(resposta[1].current?.wind_speed_10m);
        this.precipitation = resposta[1].current?.precipitation;
        this.isDay = resposta[1].current?.is_day;
        this.city = resposta[1].timezone;
        this.feelsLike = Math.round(resposta[1].current?.apparent_temperature);

        console.log('Resposta', resposta)
        },

        error: (err) => {
          console.error('Erro ao buscar clima', err)
        }
      }

    )

  }
}

