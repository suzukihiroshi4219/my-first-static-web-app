import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './loginModel';
import { FormControl, Validators } from '@angular/forms';

export class PrivateAPIKeySet {
  constructor(public key: string, public secret: string) {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  keySet = new PrivateAPIKeySet('', '');
  hide = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.router.navigate(['measurement-result']);
  }
}
