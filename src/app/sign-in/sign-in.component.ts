import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/firestore/auth.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  emailText = '';
  passwordText = '';
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private gplus: GooglePlus,
    private auth: AuthService,
    private angularFireAuth: AngularFireAuth,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.auth.user.subscribe(user => {
      if (user !== null) {
        this.router.navigate(['/']);
      }
    });
  }

  signIn() {
    this.auth.signIn(this.emailText, this.passwordText).then(() => {
      this.router.navigate(['/']);
    });
  }

  googleSignIn() {
    if (this.platform.is('cordova')) {
      // Cordova環境でのみGooglePlusプラグインでログインする
      this.nativeGoogleLogin().then(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.auth.googleSignIn().then(() => {
        this.router.navigate(['/']);
      });
    }
  }
  async nativeGoogleLogin(): Promise<any> {
    try {
      const gplusUser = await this.gplus.login({
        webClientId: environment.webClientId,
        offline: true,
        scopes: 'profile email'
      });

      return await this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      );
    } catch (err) {
      console.log(err);
    }
  }
}
