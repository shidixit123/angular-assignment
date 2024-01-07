import { Component, EventEmitter, Output } from '@angular/core';
import { LoginFacadeService } from '../../data-access/facade/login-facade.service';
import { AuthTokenService } from '../../data-access/services/auth-token/auth-token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public loginFacadeService: LoginFacadeService,
    private authTokenService: AuthTokenService
  ) {}
  @Output() logoutEvent = new EventEmitter<void>();
  @Output() GoToHomeEvent = new EventEmitter<void>();
  @Output() GoToLoginEvent = new EventEmitter<void>();

  logout() {
    // Add your logout logic here
    // For example, you might want to call a service to handle the logout
    this.authTokenService.removeAuthToken();
    this.loginFacadeService.IsStudentLoggedIn$.next(false);

    this.logoutEvent.emit();
  }
  goToLogin() {
    this.GoToLoginEvent.emit();
  }
  goToHome() {
    this.GoToHomeEvent.emit();
  }
}