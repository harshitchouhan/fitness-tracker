import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrainingService } from './../training.service';
import { Exercise } from './../excersie.model';
import { NgForm } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { UiService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  excercises: Exercise[] = [];
  exerciseSubscription: Subscription;

  isLoading = true;

  private loadingSubs: Subscription;

  constructor(private trainingService: TrainingService, private UiService: UiService) {}

  ngOnInit(): void {
    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe((exercise) => {
      this.excercises = exercise;
    });

    this.loadingSubs = this.UiService.loadingStateChanged.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });

    this.fetchExercises()
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  ngOnDestroy() {
    if(this.loadingSubs) {
      this.loadingSubs.unsubscribe();
    }

    if(this.exerciseSubscription) {
      this.exerciseSubscription.unsubscribe();
    }
  }
}
