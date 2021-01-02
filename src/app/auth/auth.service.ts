import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthData } from './auth-data.model';
import { TrainingService } from '../training/training.service';
import { UiService } from './../shared/ui.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  authChange = new Subject<boolean>();

  constructor(private router: Router, private afAuth: AngularFireAuth, private trainingService: TrainingService, private UIService: UiService) {}

  initAuthListener() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this._isAuthSuccess(true, '/training');
      } else {
        this.trainingService.cancelSubscriptions();
        this._isAuthSuccess(false, '/login');
      }
    });
  }

  registerUser(authData: AuthData) {
    this.UIService.loadingStateChanged.next(true);
    this.afAuth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        this.UIService.loadingStateChanged.next(false);
        console.log(result);
      })
      .catch((error) => {
        this.UIService.loadingStateChanged.next(false);
        this._showSnackBar(error);
      });
  }

  login(authData: AuthData) {
    this.UIService.loadingStateChanged.next(true);
    this.afAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        this.UIService.loadingStateChanged.next(false);
        console.log(result);
      })
      .catch((error) => {
        this.UIService.loadingStateChanged.next(false);
        this._showSnackBar(error);
      });
  }

  logout() {
    this.afAuth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }

  private _isAuthSuccess(isSuccess: boolean, redirect: string) {
    this.isAuthenticated = isSuccess;
    this.authChange.next(isSuccess);
    this.router.navigateByUrl(redirect);
  }

  private _showSnackBar(error: any) {
    this.UIService.showSnackBar(error.message, null, 6000);
  }
}
