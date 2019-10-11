import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/firestore/auth.service';
import { UserService } from 'src/app/services/firestore/user.service';
import { User } from 'src/app/models/user';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user: User = new User();
  constructor(
    private auth: AuthService,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.auth.user.subscribe(u => {
      this.user = u ? u : new User();
    });
  }

  update() {
    this.userService.updateUser(this.user);
    this.openSnackBar('updated');
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
