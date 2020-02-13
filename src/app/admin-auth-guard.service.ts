import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from './auth.service';
import { map, switchMap } from 'rxjs/operators';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate() {
    return this.auth.user$.pipe(
      switchMap(value => {
        return this.userService.get(value.uid).pipe(
          map(user => user.isAdmin)
        );
      })
    );
  }
}

