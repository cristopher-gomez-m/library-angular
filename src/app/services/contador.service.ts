import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Book } from '../interfaces/book';
@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  books:Book[]=[];
  /*
  libro:Book={
    id: 0,
    src: '',
    title: '',
    description: '',
    price: 0
  };
  */
  private enviarMensajeSubject = new Subject<Book[]>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();
  constructor() { }

  añadirLibro(libro:Book){
    this.books.push(libro); 
    this.enviarMensajeSubject.next(this.books);
    console.log(this.books);
  }
  getBooks() {
    return this.books;
  }
  eliminarLibro(id:number){
    this.books.splice(id,1);
    this.enviarMensajeSubject.next(this.books);
    console.log(this.books);
  }
  resetBooks(){
    this.books=[];
    this.enviarMensajeSubject.next(this.books);
  }
}
