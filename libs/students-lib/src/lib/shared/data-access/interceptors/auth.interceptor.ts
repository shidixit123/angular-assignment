import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthTokenService } from '../services/auth-token/auth-token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authTokenService: AuthTokenService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.authTokenService.getAuthToken();
    const baseURL = this.authTokenService.getBaseURL();

    if (authToken) {
      // Clone the request and attach the token
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Basic ${authToken}`,
          Cookie: 'ARRAffinity=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17;ARRAffinitySameSite=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17;'
        },
        url: `${baseURL}/${req.url}`,
        withCredentials: true,
      });

      return next.handle(authReq);
    }

    // If there is no token, pass the original request
    return next.handle(req);
  }
}