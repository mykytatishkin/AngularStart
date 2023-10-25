import { Component, OnInit } from '@angular/core';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title :string = '';
  color1 :string = '';
  message :string = 'Hello';
  image_url :string = './favicon.ico';
  books:Book[] = [];
  book:Book | undefined

  constructor(){}
  ngOnInit(): void {
    this.title = "app1";
    this.color1 = "blue";

    this.books = [
    new Book(1, "Goblin Reservetion", "Clifford Simak", 250),
    new Book(2, "I, robot", "Isaac Asimov", 220),
    new Book(3, "Solaris", "Stanislav Lem", 300)
    ];
    
  }

  getColor(): string{
    if(this.message.length < 10) {
      return this.color1;
    }
    else {
      return "green";
    }
  }
  
  changeMessage(elem: any): void {
    this.message = elem.target.value;
  }

  getColorByName(color:string): string {
    this.color1 = color
    return this.color1
  }

  checkCondition(): boolean{
    return this.color1=="violet";
  }

  addBook(id: number, title: string, author:string, price:number): Book{
    var book1 = new Book(id, title, author, price);
    console.log(book1);
    return book1;
  }
}


