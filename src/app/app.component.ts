import { Component, HostBinding, OnInit } from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './services/firestore/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class') componentCssClass: SafeStyle = '';
  themeColor$?: Observable<string>;
  subscriptions: Subscription[] = [];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
  ) {
    this.initializeApp();
  }

  ngOnInit() { }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  signOut() {
    this.auth.signOut();
  }
}
