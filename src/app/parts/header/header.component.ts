import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/firestore/auth.service';
import { Store } from '@ngrx/store';
import * as CoreReducer from 'src/app/store/core.reducer';
import * as CoreActions from 'src/app/store/core.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private store: Store<CoreReducer.State>
  ) {}

  ngOnInit() {}

  signOut() {
    this.auth.signOut();
  }

  onSetTheme(theme: string) {
    this.store.dispatch(CoreActions.setThemeColor({themeColor: theme}));
  }
}
