import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../../service/weatherapi.service';
import { HeaderComponent } from '../../components/header/header.component';
import { CurrentWeatherComponent } from '../../components/current-weather/current-weather.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CurrentWeatherComponent],
  templateUrl: './home.component.html',   
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private weatherService: WeatherapiService){}

  city = 'Berlim, Alemanha';
  temperature?: number;
  wind = 0;
  humidity = 46;
  precipitation = 0; 
  isDay = 0;


  ngOnInit(): void {
    this.carregarTempo(52.5186, 13.4081);
  }

  carregarTempo(lat: number, long: number){
    this.weatherService.getWeather(lat, long).subscribe(
      {
        next: (resposta) => {
        this.temperature = resposta.current?.temperature_2m;
        this.humidity = resposta.current?.relative_humidity_2m;
        this.wind = resposta.current?.wind_speed_10m;
        this.precipitation = resposta.current?.precipitation;
        this.isDay = resposta.current?.is_day;
          console.log('RESPOSTA COMPLETA:', resposta);
          console.log('TEMPERATURA:', resposta.current?.temperature_2m);
        },

        error: (err) => {
          console.error('Erro ao buscar clima', err)
        }
      }

    )

  }
}

