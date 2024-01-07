import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginFacadeService } from '@angular-monorepo/students-lib';
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private loginService: LoginFacadeService
    ) { }

     canActivate(): Observable<boolean> {
        return this.loginService.isUserAuthenticated();
    }
}
