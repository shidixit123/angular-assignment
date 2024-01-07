import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  LoginFacadeService,
  SnackbarService,
  StudentsFacadeService,
} from '@angular-monorepo/students-lib';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'angular-monorepo-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  private _subs = new Subscription();
  loginForm!: FormGroup;
  username: string = '';
  password: string = '';
  constructor(
    private fb: FormBuilder,
    private loginFacadeService: LoginFacadeService,
    private router: Router,
    private snackbarService: SnackbarService,
    public studentsFacadeService: StudentsFacadeService
  ) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    // Implement your login logic here
    if (this.loginForm.valid) {
      let username = this.loginForm.controls['username'].value;
      let password = this.loginForm.controls['password'].value;
      this.loginFacadeService.login(username, password);
      this._subs.add(
        this.loginFacadeService.IsStudentLoggedIn$.subscribe(
          (isLoggedInSuccess: boolean) => {
            if (isLoggedInSuccess) {
              this.snackbarService.showSuccessMessage(
                'logged In Successfully.'
              );
              this.studentsFacadeService.loadStudentList();
              this.studentsFacadeService.loadGradeList();
              this.studentsFacadeService.loadEnrollmentList();
              this.router.navigate(['/student-list']);
            } else {
              this.snackbarService.showFailureMessage(' Unable to login.');
            }
          }
        )
      );
      console.log('Form submitted:', this.loginForm.value);
      // Add authentication logic here (e.g., call a service to validate credentials)
    }
  }
  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}
