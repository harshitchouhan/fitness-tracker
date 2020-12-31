import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Links } from './../../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() navigationLinks: Links[];
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onSidenavToggle() {
    this.sidenavToggle.emit();
  }
}
