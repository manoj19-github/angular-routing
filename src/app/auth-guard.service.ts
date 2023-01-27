import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGurardService implements CanActivate {
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
}
