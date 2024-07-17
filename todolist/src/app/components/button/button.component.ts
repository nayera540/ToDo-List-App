import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, CommonModule, FormsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() className: string = '';
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
