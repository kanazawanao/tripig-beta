import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User | null | undefined>;
  userId = '';
  loggedIn = false;
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private userService: UserService
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.userId = user.uid;
          this.loggedIn = true;
          return this.afStore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          this.loggedIn = false;
          return of(null);
        }
      })
    );
  }

  async siginUp(email: string, password: string) {
    try {
      const credential = await this.afAuth.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      return this.userService.addUser(this.createUser(credential.user));
    } catch (err) {
      return console.log(err);
    }
  }

  async signIn(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      return console.log(err);
      // TODO: エラー処理追加
    }
  }

  googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthSignIn(provider);
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/signIn']);
    });
  }

  private async oAuthSignIn(provider: firebase.auth.AuthProvider) {
    try {
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      return this.userService.addUser(this.createUser(credential.user));
    } catch (err) {
      return console.log(err);
    }
  }

  private createUser(crediential: firebase.auth.UserCredential | any) {
    const user = new User();
    if (crediential) {
      user.uid = crediential.uid ? crediential.uid : '';
      user.email = crediential.email ? crediential.email : '';
      user.displayName = crediential.displayName ? crediential.displayName : '';
      user.photoURL = crediential.photoURL ? crediential.photoURL : '';
      user.profile = crediential.profile ? crediential.profile : '';
    }
    return user;
  }
}
