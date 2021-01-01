import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css'],
})
export class CurrentTrainingComponent implements OnInit {
  progress: number = 0;
  timer: number;

  @Output() trainigExit = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this._startOrResumeTimer();
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.trainigExit.emit();
      } else {
        this._startOrResumeTimer();
      }
    });
  }

  private _startOrResumeTimer() {
    this.timer = setInterval(() => {
      this.progress += 20;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }
}
