import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGurardService implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private authService: AuthService
  ) {}
  canActivate(): boolean {
    if (this.authService.checkIsAuthenticated()) return true;
    this.router.navigate(['']);
    return false;
  }
  canActivateChild(): boolean {
    return this.canActivate();
  }
}
