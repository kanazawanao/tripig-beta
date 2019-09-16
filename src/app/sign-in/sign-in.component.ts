import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/firestore/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  emailText = '';
  passwordText = '';
  constructor(private router: Router, private auth: AuthService) {}

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
    this.auth.googleSignIn().then(() => {
      this.router.navigate(['/']);
    });
  }
}
