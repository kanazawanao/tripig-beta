import { Component, HostBinding, OnInit } from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { AuthService } from './services/firestore/auth.service';
import * as fromCore from 'src/app/store';

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
    private store: Store<fromCore.State>
  ) {
    this.initializeApp();
  }

  ngOnInit(): void {
    this.setTheme();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  signOut() {
    this.auth.signOut();
  }

  setTheme() {
    this.themeColor$ = this.store.select(fromCore.getThemeColor);
    this.subscriptions.push(this.themeColor$.subscribe(themeColor => {
      if (themeColor) {
        this.componentCssClass = themeColor;
      }
    }));
  }
}
