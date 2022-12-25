import { Component, Input,OnInit } from '@angular/core';
import { ContadorService } from '../services/contador.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  constructor(private servicioComunicacion: ContadorService){}
  ngOnInit(): void {
    this.servicioComunicacion.enviarMensajeObservable.subscribe(response=>{
      this.libro = response
     })
  }
  @Input() libro!:{id:number,src:string,title:string,description:string};

  comprar(libro:{id:number,src:string,title:string,description:string}){
    this.servicioComunicacion.enviarMensaje(libro);
  }
}
