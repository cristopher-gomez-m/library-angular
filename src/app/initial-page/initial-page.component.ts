import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../interfaces/book';
import { BookFinderService } from '../services/book-finder.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css'],
})
export class InitialPageComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.books);
  }
  @Input() name:String="";
  constructor(private bookFinder:BookFinderService,private router: Router) { }
  books : Book[]= this.bookFinder.getBooks();
  onNameChange() {
    console.log(this.name);
}

submit(){
  console.log("funciona");
  this.bookFinder.filterBooks(this.name);
  console.log(this.bookFinder.filteredBooks);
}
  
}
