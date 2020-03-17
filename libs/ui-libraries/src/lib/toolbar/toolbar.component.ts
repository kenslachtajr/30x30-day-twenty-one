import { Component, OnInit, Input } from '@angular/core';
import { AuthService, NotifyService } from '@dogs-ngrx/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'dogs-ngrx-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  userStatus = ['exit_to_app', 'person'];
  buttonStatus;

  @Input() sidenav;
  @Input() authenticated$;
  @Input() title;

  constructor(
    private auth: AuthService,
    private notify: NotifyService,
    private route: Router
  ) {}

  ngOnInit() {}

  logout() {
    this.auth.logout();
    this.notify.notification('Successfully Logged Out');
  }

  login() {
    this.route.navigate(['login']);
  }
}
