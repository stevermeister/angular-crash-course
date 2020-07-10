import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = [
    { title: 'something to do1' },
    { title: 'something to do2' },
    { title: 'something to do3' },
    { title: 'something to do4' },
  ];

  constructor() { }

  getTasks() {
    return this.tasks;
  }
}
