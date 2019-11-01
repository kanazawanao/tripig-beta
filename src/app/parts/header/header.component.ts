import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/firestore/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}

  signOut() {
    this.auth.signOut();
  }
}
