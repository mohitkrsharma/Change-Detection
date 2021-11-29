import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Change-Detection';
  fruits = ['Mango', 'Apple', 'Grapes'];
  constructor() {}
  addFruit(item: string) {
    this.fruits = [...this.fruits, item];
  }
}
