import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent implements OnInit{
  ngOnInit(): void {
    this.getValue();
  }
  
  @Input() books:Book[]=[];
  valueToPay:number=0;
  getValue(){
    this.books.forEach(book=>{
      this.valueToPay+= book.price;
    });
  }
}
