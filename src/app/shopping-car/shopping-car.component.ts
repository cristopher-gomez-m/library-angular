import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../services/contador.service';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.css']
})
export class ShoppingCarComponent implements OnInit {
  
  libros!:Array<{id:number,src:string,title:string,description:string}>;
  
  constructor(private servicioComunicacion: ContadorService){}
  ngOnInit(): void {
    this.libros = new Array<{id:number,src:string,title:string,description:string}>;
    this.servicioComunicacion.enviarMensajeObservable.subscribe(response=>{
      this.libros.push(response);
     })
  }
}
