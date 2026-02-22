import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../../service/weatherapi.service';
import { HeaderComponent } from '../../components/header/header.component';
import { CurrentWeatherComponent } from '../../components/current-weather/current-weather.component';
import { LoadingStateComponent } from '../../components/loading-state/loading-state.component';
import { DailyForecastComponent } from '../../components/daily-forecast/daily-forecast.component';
import { HourlyForecastComponent } from '../../components/hourly-forecast/hourly-forecast.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CurrentWeatherComponent, LoadingStateComponent, DailyForecastComponent, CommonModule, HourlyForecastComponent],
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

  previsaoSemanal?: any[];
  previsaoDiaria?: any[];
  horaAtual = new Date();
  

  ngOnInit(): void {
    this.carregarTempo(40.7128, -74.0060);
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
        
        this.previsaoSemanal = resposta[1].daily?.time.map((data: string, index: number) => {
          
          const dataObj = new Date(data);

          return{
            diaSemana: dataObj.toLocaleDateString('en-US', {weekday: 'short'}),
            temperaturaMax: Math.round(resposta[1].daily?.temperature_2m_max[index]),
            temperaturaMin: Math.round(resposta[1].daily?.temperature_2m_min[index]),
            weatherCode: resposta[1].daily?.weather_code[index]
          };

        });

        this.previsaoDiaria = resposta[1].hourly?.time.filter((hora: string) => {
         const data = new Date(hora);

         return data >= this.horaAtual
         
        }).slice(0, 8).map((hora: string, index: number) => {
          
          const horaObg = new Date(hora);
          
            return {
            horario: horaObg.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }),
            temperatura: Math.round(resposta[1].hourly?.temperature_2m[index]),
            weatherCode: resposta[1].hourly?.weather_code[index]
          }
          
        })

        console.log('Resposta', resposta)
        console.log('Previsão semanal:', this.previsaoSemanal);
        console.log('Previsão Diária', this.previsaoDiaria)

        },

        error: (err) => {
          console.error('Erro ao buscar clima', err)
        }
      }

    )

  }
}

