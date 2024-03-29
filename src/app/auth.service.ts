import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private isAuthenticated = false;
  login() {
    this.isAuthenticated = true;
  }
  logout() {
    this.isAuthenticated = false;
  }
  checkIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
