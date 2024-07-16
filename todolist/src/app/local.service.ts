import { Injectable } from '@angular/core';
import { Tasks } from './mock-tasks';
import { Task } from './Task';


@Injectable({
  providedIn: 'root'
})
export class LocalService {
  tasks: Task[] = Tasks;

  constructor() {
    if (!localStorage.getItem("tasksRendered")) {
      // If "tasksRendered" flag doesn't exist, it means tasks haven't been rendered yet
      if (!localStorage.getItem("Tasks")) {
        // If "Tasks" key doesn't exist in local storage, initialize it with the tasks array
        localStorage.setItem("Tasks", JSON.stringify(this.tasks));
      } else {
        // If "Tasks" key exists, update the tasks array with the stored tasks
        this.tasks = JSON.parse(localStorage.getItem("Tasks") || '[]');
      }
      // Set the flag to indicate that tasks have been rendered
      localStorage.setItem("tasksRendered", "true");
    }
  }

  getTasks(): Task[] {
    const tasksJson = localStorage.getItem("Tasks");
    if (tasksJson) {
      return JSON.parse(tasksJson);
    }
    return [];
  }

  addNewItem(task: Task){
    const tasks = JSON.parse(localStorage.getItem("Tasks") || '[]');
    tasks.push(task);
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }

  deleteTask(tasks: Task[]){
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }

  toggleTask(task: Task){
    const tasks = JSON.parse(localStorage.getItem("Tasks") || '[]');
    const index = tasks.findIndex((t: { id: number | undefined; }) => t.id === task.id);
    if(~index){
      tasks[index] = task;
    }
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }

  clearAllTasks(){
    localStorage.setItem("Tasks", JSON.stringify([]))
  }
}
