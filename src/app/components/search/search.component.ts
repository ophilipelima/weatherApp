import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeocodingApiService } from '../../service/geocoding-api/geocoding-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor(private geocodingService: GeocodingApiService){}

  @Output() cidadeSelecionada = new EventEmitter<any>();

  textoDigitado: string = '';
  campoSelecionado!:  any;
  cidades: any[] = [];


buscarCidades(){
    this.geocodingService.get(this.textoDigitado).subscribe(res =>{
      this.cidades = res.results;
      console.log("Resposta API:", res);
    })
  }

selecionarCidade(cidade: any){
  this.campoSelecionado = cidade;
  this.textoDigitado = cidade.name;
  this.cidades = [];
}
  search(){
    this.cidadeSelecionada.emit(this.campoSelecionado)
  }

} 
