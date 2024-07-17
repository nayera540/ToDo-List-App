// src/app/components/taskslist/taskslist.component.ts
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Task } from '../../Task';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-taskslist',
  standalone: true,
  imports: [ButtonComponent, CommonModule, MatListModule, MatDividerModule, MatCheckboxModule],
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.css'],
})
export class TaskslistComponent {
  @Input() tasks: Task[] = [];
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() toggleTaskDone: EventEmitter<Task> = new EventEmitter();
  @Output() clearTasks: EventEmitter<void> = new EventEmitter();
svg: any;


  onDeleteTask(task: Task) {
    this.deleteTask.emit(task);
  }

  onToggleDone(task: Task) {
    this.toggleTaskDone.emit(task);
  }

  onClearTasks() {
    this.clearTasks.emit();
  }
}
