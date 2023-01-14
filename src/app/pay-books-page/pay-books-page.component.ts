import { Component} from '@angular/core';
import { Navigation, Router } from '@angular/router';

@Component({
  selector: 'app-pay-books-page',
  templateUrl: './pay-books-page.component.html',
  styleUrls: ['./pay-books-page.component.css']
})
export class PayBooksPageComponent  {
  
  
  nav: any;
  libros: any;
  asd: { id: number; src: string; title: string; description: string;}[] = [];
  constructor(private router: Router) { 
    
    this.nav = this.router.getCurrentNavigation();
    this.libros = this.nav.extras.state;
  
    if (this.libros != null)
    {     
      
      console.log(this.libros.booksToPay.queryParams['libros']);
      this.libros.booksToPay.queryParams['libros'].forEach((element: any)=>{
        this.asd.push(element);
      })
      this.asd.forEach(element=>{
        console.log(element.id);
      })
      /*
      console.log(this.asd);
      console.log(this.asd[0]);
      this.libros.booksToPay.queryParams['libros']
      this.asd.push(this.libros.booksToPay.queryParams.libros);
      */
    }
    
  };

}
