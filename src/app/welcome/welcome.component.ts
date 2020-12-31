import { Component, OnInit } from '@angular/core';

interface Info {
  icon: string;
  heading: string;
  desc: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  homeText: Info[] = [
    { icon: 'downhill_skiing', heading: 'Activity', desc: 'Stay active and enjoy better health and more fun!' },
    { icon: 'groups', heading: 'Community', desc: 'Get to know other people who share your passion!' },
    { icon: 'sports_kabaddi', heading: 'Chanllenges', desc: 'Never stop! Dive into new challenges everyday' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
