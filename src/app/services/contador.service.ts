import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  libro:{id:number,src:string,title:string,description:string}={
    id: 0,
    src: '',
    title: '',
    description: ''
  };
  private enviarMensajeSubject = new Subject<{id:number,src:string,title:string,description:string}>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();
  constructor() { }

  enviarMensaje(libro:{id:number,src:string,title:string,description:string}){
    this.libro=libro; 
    this.enviarMensajeSubject.next(this.libro);
  }
}
