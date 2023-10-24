import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title :string = '';
  color1 :string = '';

  constructor(){}
  ngOnInit(): void {
    this.title = "app1";
    this.color1 = "yellow";
  }

  getColor(): string{
    return this.color1;
  }
}


