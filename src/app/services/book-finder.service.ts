import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookFinderService {

  constructor() { }
  books : Book[]= [
    {
      id: 1,
      src: 'https://www.elejandria.com/covers/Don_Quijote_de_la_Mancha-Cervantes_Miguel-lg.png',
      title: 'Don Quijote de la Mancha',
      description:
      `El ingenioso hidalgo don Quijote de la Mancha narra las aventuras de Alonso Quijano, 
      un hidalgo pobre que de tanto leer novelas de caballería acaba enloqueciendo y creyendo 
      ser un caballero andante, nombrándose a sí mismo como don Quijote de la Mancha.`,
      price: 15.90,
    },
    {
      id: 2,
      src: 'https://m.media-amazon.com/images/I/51uxZ1EkT4L._SL500_.jpg',
      title: 'Harry Potter y la piedra filosofal',
      description: `En esta primera obra se introducen la mayoría de los personajes principales de la serie, 
      así como muchos de los lugares donde se desarrollará la acción.`,
      price: 18.50,
    },
  ];

  filteredBooks: Book[]=[];

  getBooks() {
    return this.books;
  }
  filterBooks(title:String){
    this.filteredBooks = this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  }

  
}
