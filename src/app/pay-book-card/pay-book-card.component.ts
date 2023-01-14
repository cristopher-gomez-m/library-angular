import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-pay-book-card',
  templateUrl: './pay-book-card.component.html',
  styleUrls: ['./pay-book-card.component.css']
})
export class PayBookCardComponent{
  @Input() libro:{id:number,src:string,title:string,description:string}={
    id: 0,
    src: '',
    title: 'asd',
    description: ''
  };
}
