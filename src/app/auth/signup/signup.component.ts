import { Component, OnInit } from '@angular/core';

interface Form {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: Form) {
    console.log(form)
  }

}
