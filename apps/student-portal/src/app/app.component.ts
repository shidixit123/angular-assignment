import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import {AuthTokenService} from '@angular-monorepo/students-lib';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor( private authTokenService: AuthTokenService, private router: Router
  ) {
    authTokenService.setBaseURL(environment.apiUrl);
  }

  logout() {
    this.router.navigate(['/login']);
    // Add your actual logout logic here
    console.log('Logout clicked');
  }

  navigateToHome(): void {
    this.router.navigate(['']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  title = 'student-portal';
}
