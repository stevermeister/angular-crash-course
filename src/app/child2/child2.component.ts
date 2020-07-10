import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <p>
      child2 works!
    </p>
  `,
  styles: [
  ]
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
