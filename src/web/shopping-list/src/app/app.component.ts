import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { Item } from './models';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatListModule,
    NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping-list';

  items = [] as Item[]

  constructor() {
    this.items.push({name: 'Item 1', id: '1'}, {name: 'Item 2', id: '2'}, {name: 'Item 3', id: '3'})
   }
}
