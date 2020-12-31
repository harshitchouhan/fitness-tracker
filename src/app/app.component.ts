import { Component } from '@angular/core';

interface Links {
  label: string;
  route: string;
  emojiName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  navigationLinks: Links[] = [
    { label: 'Signup', route: '/signup', emojiName: 'face' },
    { label: 'Login', route: '/login', emojiName: 'input' },
    { label: 'Training', route: '/training', emojiName: 'fitness_center' },
  ];
}
