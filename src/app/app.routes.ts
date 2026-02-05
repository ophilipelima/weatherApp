import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weatherApp';
}
