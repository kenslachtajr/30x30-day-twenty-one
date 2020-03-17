import { NotifyService } from '../notify/notify.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private notify: NotifyService
    ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone<{accessToken: string}>({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      },
    })
    return next.handle(request).pipe(
      tap(() => {}, (error) => this.notify.notification(error.message))
    )
  }
}
