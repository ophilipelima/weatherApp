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
  temperature = 0;
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
          this.humidity = resposta.relative_humidity_2;
          this.precipitation = resposta.precipitation;
          this.wind = resposta.wind_speed_10m;
          this.isDay = resposta.is_day;
          this.temperature = resposta.temperature_2m;
        },

        error: (err) => {
          console.error('Erro ao buscar clima', err)
        }
      }

    )

  }
}
