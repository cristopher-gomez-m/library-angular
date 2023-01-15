import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Book } from '../interfaces/book';
@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  libro:Book={
    id: 0,
    src: '',
    title: '',
    description: '',
    price: 0
  };
  private enviarMensajeSubject = new Subject<Book>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();
  constructor() { }

  enviarMensaje(libro:Book){
    this.libro=libro; 
    this.enviarMensajeSubject.next(this.libro);
  }
}
