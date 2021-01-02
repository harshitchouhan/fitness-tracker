import { Component, OnInit } from '@angular/core';
import { TrainingService } from './../training.service';
import { Exercise } from './../excersie.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  excercises: Exercise[] = [];

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.excercises = this.trainingService.getAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    console.log(form)
    this.trainingService.startExercise(form.value.exercise);
  }
}
