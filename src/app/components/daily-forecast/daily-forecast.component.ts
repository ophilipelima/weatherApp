import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-daily-forecast',
  standalone: true,
  imports: [],
  templateUrl: './daily-forecast.component.html',
  styleUrl: './daily-forecast.component.scss'
})
export class DailyForecastComponent {
  @Input() diaSemana?: string;
  @Input() temperaturaMax?: number;
  @Input() temperaturaMin?: number;
  @Input() weatherApp?: number;

}
