import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Excercise {
  label: string;
  value: string;
}

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  excercises: Excercise[] = [
    { label: 'Crunches', value: 'crunches' },
    { label: 'Touch Toes', value: 'touch-toes' },
    { label: 'Side Lunges', value: 'side-lunges' },
    { label: 'Burpees', value: 'burpees' },
  ];

  @Output() trainingStart = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onStartTraining() {
    this.trainingStart.emit();
  }
}
