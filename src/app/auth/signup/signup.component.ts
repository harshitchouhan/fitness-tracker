import { Component, OnInit } from '@angular/core';

interface Form {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  maxDate: Date = new Date();
  minDate: Date = new Date();

  constructor() {}

  ngOnInit(): void {
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.minDate.setFullYear(this.minDate.getFullYear() - 50);
  }

  onSubmit(form: Form) {
    console.log(form);
  }
}
