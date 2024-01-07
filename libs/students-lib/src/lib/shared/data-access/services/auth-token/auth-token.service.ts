import { Injectable } from '@angular/core';

import { NO_AUTH, DEFAULT_BASE_URL } from '../../../helpers/utils';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenService {
  /**
   * @description save Auth Token to local storage
   * @param token auth token to be saved
   */
  saveAuthToken(token: string): void {
    localStorage.setItem('auth-token', token);
  }

  /**
   * @description get Auth Token to local storage
   */
  getAuthToken(): string {
    return localStorage.getItem('auth-token') || NO_AUTH;
  }

   /**
   * @description clear Auth Token to local storage
   */
   removeAuthToken(): void {
    localStorage.removeItem('auth-token');
  }

  setBaseURL(url: string): void {
    sessionStorage.setItem('baseURL', url);
  }

  getBaseURL(): string {
    return sessionStorage.getItem('baseURL') || DEFAULT_BASE_URL;
  }
}
