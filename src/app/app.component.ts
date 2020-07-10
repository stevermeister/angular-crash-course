import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [style.color]="myColor" *ngIf="show">
      Hello, {{ title }}!
    </div>
    <button (click)="show = !show"> Show/Hide </button>
    <button (click)="myColor = 'pink'"> Make Pink! </button>
    <input (input)="myColor = $event.target.value" (keydown.control.enter)="myColor = 'black'" >
    <app-child [number]="number"></app-child>
    <input (input)="doSomething($event.target.value)" >
  `,
  styles: [`
    .red {
      color: red;
    }
  `]
})
export class AppComponent {
  number = 3;
  show = false;
  title = 'myapp';
  user = {
    name: 'John'
  }
  myclass = 'red'
  myColor = 'green'

  doSomething(number) {
    console.log(number);
    this.number = number;
  }


}
