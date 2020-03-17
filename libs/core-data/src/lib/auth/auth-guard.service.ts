import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public route: Router, public authService: AuthService) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticated$.value) {
      this.route.navigate(['/login']);
      return false;
    }
    return true;
  }
}
