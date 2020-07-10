import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-child',
  template: `
    {{this.number}}
    <ul>
      <li *ngFor="let task of tasks">
        {{task.title}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  @Input() number; 

  tasks = [];

  constructor(private taskService: TaskService) { 
    
  }

  ngOnInit(): void {
    // this one executes only ones
    this.tasks = this.taskService.getTasks().slice(0, this.number);
  }

  ngDoCheck(): void {
    // this one executes on each change detection
    this.tasks = this.taskService.getTasks().slice(0, this.number);
  }

}
