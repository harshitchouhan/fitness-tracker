import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Links } from './../../app.component';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit {
  @Input() navigationLinks: Links[];
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onSidenavToggle() {
    this.sidenavToggle.emit();
  }
}
