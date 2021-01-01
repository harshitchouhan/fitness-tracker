import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'src/app/auth/auth.service';

import { Links } from './../../app.component';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Input() navigationLinks: Links[];
  @Output() sidenavToggle = new EventEmitter<void>();

  isAuth: boolean = false;
  authSubscription: Subscription

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus
    })
  }

  onSidenavToggle() {
    this.sidenavToggle.emit();
  }

  display(route: string) {
    switch (route) {
      case 'Signup':
        if (!this.isAuth) return true;
        break;
      case 'Login':
        if (!this.isAuth) return true;
        break;
      case 'Logout':
        if (this.isAuth) return true;
        break;
      case 'Training':
        if (this.isAuth) return true;
        break;
    }
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe()
  }
}
