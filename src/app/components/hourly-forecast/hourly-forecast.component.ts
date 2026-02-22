import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hourly-forecast',
  standalone: true,
  imports: [],
  templateUrl: './hourly-forecast.component.html',
  styleUrl: './hourly-forecast.component.scss'
})
export class HourlyForecastComponent {
  @Input() horario?: string;
  @Input() temperatura?: number;
  @Input() weatherCode?: number;

  get iconSrc(): string{

  if(this.weatherCode === 0){
    return '../../../assets/images/icon-sunny.webp';
  }

  if(this.weatherCode! >= 1 && this.weatherCode! <= 3){
    return '../../../assets/images/icon-partly-cloudy.webp';
  }

  if(this.weatherCode === 45){
    return '../../../assets/images/icon-overcast.webp'
  }

  if(this.weatherCode! >= 51 && this.weatherCode! <= 67){
    return '../../../assets/images/icon-drizzle.webp'
  }

  if(this.weatherCode! >= 70 && this.weatherCode! <= 77){
    return '../../../assets/images/icon-snow.webp';
  }

  if(this.weatherCode! >=80 && this.weatherCode! <= 82){
    return '../../../assets/images/icon-rain.webp'
  }

  if(this.weatherCode! === 95){
    return '../../../assets/images/icon-storm.webp'
  }

  if(this.weatherCode! >= 96 && this.weatherCode! <= 99){
    return '../../../assets/images/icon-drizzle.webp'
  }

  return '../../../assets/images/icon-error.svg';
}

}
