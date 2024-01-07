import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TEMP_BASE_64INCODEDSTRING } from '../../helpers/utils';
import { AuthTokenService } from '../services/auth-token/auth-token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginFacadeService {
  IsStudentLoggedIn$ = new BehaviorSubject<boolean>(false);
  constructor(private authTokenService: AuthTokenService) { 
  }
  login(username: string, password: string): void {
    const encodedCredentials = btoa(`${username}:${password}`);
    if(encodedCredentials === TEMP_BASE_64INCODEDSTRING) {
      this.authTokenService.saveAuthToken(encodedCredentials);
      this.IsStudentLoggedIn$.next(true);
    }
  }

  isUserAuthenticated (): Observable<boolean> {
    return this.IsStudentLoggedIn$.asObservable();
  }
}
