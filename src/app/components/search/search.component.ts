import { Component, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeocodingApiService } from '../../service/geocoding-api/geocoding-api.service';
import { WeatherapiService } from '../../service/weather-api/weatherapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor(private geocodingService: GeocodingApiService, private weatherService: WeatherapiService){}

  textoDigitado: string = '';
  campoSelecionado!:  any;
  cidades!: any[];


  buscarCidades(){
    this.geocodingService.get(this.textoDigitado).subscribe(res =>{
      this.cidades = res;
    })
  }

selecionarCidade(cidade: any){
  this.campoSelecionado = cidade;
  this.textoDigitado = cidade;
}
  search(){
    this.weatherService.getWeather(this.campoSelecionado.latitude, this.campoSelecionado.longitude);
  }

} 
