import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  libros: Array<{ id: number; src: string; title: string; description: string; }> = [{
    id: 0,
    src: '',
    title: '',
    description: ''
  }];

  private enviarMensajeSubject = new Subject<Array<{ id: number; src: string; title: string; description: string; }>>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();
  constructor() { }

  enviarMensaje(libro:{id:number,src:string,title:string,description:string}){
    this.libros.push(libro);
    this.enviarMensajeSubject.next(this.libros);
  }
}
