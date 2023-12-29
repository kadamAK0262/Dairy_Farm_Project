import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-delete-society-dialog',
  templateUrl: './delete-society-dialog.component.html',
  styleUrls: ['./delete-society-dialog.component.css']
})
export class DeleteSocietyDialogComponent {

  constructor(
    public MatDialogRef: MatDialogRef<DeleteSocietyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.MatDialogRef.close(false);
  }

}
