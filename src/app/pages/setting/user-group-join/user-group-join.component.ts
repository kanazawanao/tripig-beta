import { Component, OnInit, OnDestroy } from '@angular/core';
import { GroupService } from 'src/app/services/firestore/group.service';
import { UserGroup, UserGroups } from 'src/app/models/user-group';
import { Observable, Subscription } from 'rxjs';
import { UserGroupService } from 'src/app/services/firestore/user-group.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-group-join',
  templateUrl: './user-group-join.component.html',
  styleUrls: ['./user-group-join.component.scss']
})
export class UserGroupJoinComponent implements OnInit, OnDestroy {
  groupIdText = '';
  userGroups$?: Observable<UserGroups | undefined>;
  userGroups: UserGroups = new UserGroups();
  subscriptions: Subscription[] = [];
  constructor(
    private groupService: GroupService,
    private userGroupService: UserGroupService,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit() {
    this.userGroups$ = this.userGroupService.getUserGroup();
    this.subscriptions.push(
      this.userGroups$.subscribe(u => {
        this.userGroups = !!u ? u : new UserGroups();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  join() {
    this.subscriptions.push(this.groupService.getGroupById(this.groupIdText).subscribe(g => {
      if (!!g) {
        const userGroup = new UserGroup();
        userGroup.admin = false;
        userGroup.groupName = g.groupName;
        userGroup.id = g.id;
        this.userGroups.userGroup.push(userGroup);
        this.userGroupService.addUserGroup(this.userGroups);
      } else {
        this.openSnackBar('グループが存在しません！！', 'error');
      }
    }));
  }

  openSnackBar(message: string, action: string = '') {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
