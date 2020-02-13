import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {IAppUser} from '../models/app-user';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {
  appuser: IAppUser;

  constructor(public auth: AuthService) {
    // @ts-ignore
    auth.appUser$.subscribe(appUser => this.appuser = appUser);
  }

  logout() {
    this.auth.logout();
  }
}
