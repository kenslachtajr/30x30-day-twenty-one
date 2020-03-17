import { AuthService } from '@dogs-ngrx/core-data';
import { NotifyService } from '@dogs-ngrx/core-data';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'dogs-ngrx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  userLogin = { email: '', password: '' }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notify: NotifyService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
    this.userLogin = this.form.value
    if (this.form.invalid) {
      this.notify.notification('Complete field(s) with valid information')
    } else {
      this.authService.login(this.form.value);
    }
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    })
  }
}
