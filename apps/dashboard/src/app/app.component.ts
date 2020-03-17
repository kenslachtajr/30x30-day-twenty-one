import { Component } from '@angular/core';
import { AuthService } from '@dogs-ngrx/core-data';

@Component({
  selector: 'dogs-ngrx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dogs MDV';

  links = [
    { path: '/dogs', icon: 'work', title: 'Dogs'}
  ]

  userIsAuthenticated$ = this.authService.isAuthenticated$;
  constructor(private authService: AuthService) {}
}
