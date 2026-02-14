import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss'
})
export class CurrentWeatherComponent {
  @Input() city!: string;
  @Input() temperature?: number;
  dtAtual = new Date();
}
