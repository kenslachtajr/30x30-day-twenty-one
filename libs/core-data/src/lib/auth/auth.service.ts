import { DogsService } from '@dogs-ngrx/core-data';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../dogs/dog.model';
import { NotifyService } from '../notify/notify.service';

const UrlForSignIn = "https://mdv-auth-json-server.herokuapp.com/auth/login";
const UrlForSignUp = "https://mdv-auth-json-server.herokuapp.com/users";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject(false);
  authenticatedUsers$;
  inputedUser: User;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private notifyService: NotifyService
  ) {
    this.setToken(this.getToken() || '');
  }

  getToken() {
    return localStorage.getItem('accessToken')
  }

  setToken(access_token: string) {
    localStorage.setItem('accessToken', access_token);
    this.isAuthenticated$.next(access_token !== '')
  }

  logout() {
    this.setToken('');
    this.router.navigate(['/login']);
  }

  login(user: User) {
    return this.httpClient.post<{access_token: string}>(this.getUrlForSignIn(), user).pipe(
      tap((res) => {this.setToken(res.access_token) }),
      tap(() => this.router.navigate(['/dogs'])),
      tap(() => this.notifyService.notification('Successfully Logged In'))
    ).subscribe()
  }

  signUp(user: User) {
    return this.httpClient.post(this.getUrlForSignUp(), user)
  }

  getAllCredentials() {
    return this.httpClient.get(this.getUrlForSignIn())
  }

  getUrlForSignIn() {
    return `${UrlForSignIn}`;
  }

  getUrlForSignUp() {
    return UrlForSignUp;
  }
}
