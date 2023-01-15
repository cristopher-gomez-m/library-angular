import { Component} from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-pay-books-page',
  templateUrl: './pay-books-page.component.html',
  styleUrls: ['./pay-books-page.component.css']
})
export class PayBooksPageComponent  {
  
  
  navigation: any;
  booksQueryParams: any;
  books: Book[] = [];
  constructor(private router: Router) { 
    
    this.navigation = this.router.getCurrentNavigation();
    this.booksQueryParams = this.navigation.extras.state;
  
    if (this.booksQueryParams != null)
    {     
      
      
      this.booksQueryParams.booksToPay.queryParams['libros'].forEach((element: any)=>{
        this.books.push(element);
      })
      this.books.forEach(element=>{
        console.log(element.id);
      })
      /*
      console.log(this.books);
      console.log(this.books[0]);
      this.libros.booksToPay.queryParams['libros']
      this.books.push(this.libros.booksToPay.queryParams.libros);
      */
    }
    
  };

}
