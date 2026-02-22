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
  @Input() temperatua?: number;
  @Input() weatherCode?: number;

}
