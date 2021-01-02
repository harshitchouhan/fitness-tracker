import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'src/app/auth/auth.service';

import { Links } from './../../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() navigationLinks: Links[];
  @Output() sidenavToggle = new EventEmitter<void>();

  isAuth: boolean;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe((authStatus) => {
      this.isAuth = authStatus;
    });
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

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    if(this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
