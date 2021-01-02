import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

export interface Links {
  label: string;
  route: string;
  emojiName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  navigationLinks: Links[] = [
    { label: 'Signup', route: '/signup', emojiName: 'face' },
    { label: 'Login', route: '/login', emojiName: 'input' },
    { label: 'Training', route: '/training', emojiName: 'fitness_center' },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.initAuthListener();
  }
}
