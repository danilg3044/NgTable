import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface Record {
  id: number;
  title: string;
}

@Component({
  selector: 'app-save-prompt',
  templateUrl: './save-prompt.html',
  styleUrls: ['./save-prompt.css']
})
export class SavePromptComponent {
  title = 'Do you want to save the changes?';

  constructor(
    public dialogRef: MatDialogRef<SavePromptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Record) {
      this.title = `Record ${data.id} has been changed`;
  }

  save() {
    this.dialogRef.close(true);
  }

  discard() {
      this.dialogRef.close(false);
  }
}
