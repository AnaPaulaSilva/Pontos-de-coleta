import { Component } from '@angular/core';
import { local } from './local';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pontos de Reciclagem';

  listaLocais : local;
  selectLocais = [];
  
  nome: string;
  endereco: string;
  latitude: number;
  longitude: number;

  addItem() {
    if (this.listaLocais.latitude > 0) {
      this.selectLocais.push(new local(this.listaLocais.nome, this.listaLocais.endereco, this.listaLocais.latitude, this.listaLocais.longitude));
    }
    this.listaLocais.latitude = 0;
    console.log(this.selectLocais);
  }

  consultaLocais(){
    this.listaLocais.nome != null;
  }

  editItem(){
    if(this.listaLocais.nome = 'nome'){
      
    }
  }

}
