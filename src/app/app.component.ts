// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { TaskslistComponent } from './components/taskslist/taskslist.component';
import { Task } from './Task';
import { Tasks } from './mock-tasks';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmclearlistComponent } from './components/confirmclearlist/confirmclearlist.component';
import { LocalService } from './local.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, TaskslistComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'TODO';
  tasks: Task[] = [];

  constructor(public dialog: MatDialog, private localStore: LocalService) {
    this.tasks = this.localStore.getTasks();
  }

  handleAddNewItem(newTaskText: string) {
    if (newTaskText.trim()) {
      const newTask: Task = {
        id: this.tasks.length + 1,
        text: newTaskText.trim(),
        done: false,
      };
      this.localStore.addNewItem(newTask);
      this.tasks.push(newTask);
    }
  }

  handleDeleteTask(taskToDelete: Task) {
    this.tasks = this.tasks.filter((task) => task !== taskToDelete);
    this.localStore.deleteTask(this.tasks);
  }

  handleToggleTaskDone(taskToToggle: Task) {
    taskToToggle.done = !taskToToggle.done;
    this.localStore.toggleTask(taskToToggle);
  }

  handleClearTasks() {
    const dialogRef = this.dialog.open(ConfirmclearlistComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.tasks = [];
        this.localStore.clearAllTasks();
      }
    });
  }
}
