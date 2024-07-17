import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmclearlist',
  standalone: true,
  imports: [],
  templateUrl: './confirmclearlist.component.html',
  styleUrls: ['./confirmclearlist.component.css'],
})
export class ConfirmclearlistComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmclearlistComponent>) {}


  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
