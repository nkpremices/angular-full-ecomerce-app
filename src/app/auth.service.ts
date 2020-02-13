import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {IAppUser} from './models/app-user';
import {UserService} from './user.service';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    user$: Observable<firebase.User>;


  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
        this.user$ = afAuth.authState;
  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<IAppUser | unknown> {
    return this.user$.pipe(
      switchMap(value => {
        if (value) { return this.userService.get(value.uid); }
        return of(null);
      })
    );
  }
}
