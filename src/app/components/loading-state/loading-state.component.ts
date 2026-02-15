import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-state',
  standalone: true,
  imports: [],
  templateUrl: './loading-state.component.html',
  styleUrl: './loading-state.component.scss'
})
export class LoadingStateComponent {
  @Input() feelsLike?: number;
  @Input() humidity?: number;
  @Input() wind?: number;
  @Input() precipitation?: number;
}
