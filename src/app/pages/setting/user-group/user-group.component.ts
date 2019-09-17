import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserGroupService } from 'src/app/services/firestore/user-group.service';
import { Observable, Subscription } from 'rxjs';
import { UserGroup, UserGroups } from 'src/app/models/user-group';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { GroupService } from 'src/app/services/firestore/group.service';
import { Group } from 'src/app/models/group';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent implements OnInit, OnDestroy {
  groupNameText = '';
  userGroups$?: Observable<UserGroups | undefined>;
  userGroups: UserGroups = new UserGroups();
  subscriptions: Subscription[] = [];
  constructor(
    private userGroupService: UserGroupService,
    private groupService: GroupService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.userGroups$ = this.userGroupService.getUserGroup();
    this.subscriptions.push(
      this.userGroups$.subscribe(u => {
        this.userGroups = u ? u : new UserGroups();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  regist(): void {
    const group = new Group();
    group.groupName = this.groupNameText;
    const id = this.groupService.addGroup(group);
    const userGroup = new UserGroup();
    userGroup.admin = true;
    userGroup.groupName = this.groupNameText;
    userGroup.id = id;
    this.userGroups.userGroup.push(userGroup);
    this.userGroupService.addUserGroup(this.userGroups);
    this.groupNameText = '';
  }

  delete(i: number): void {
    const id = this.userGroups.userGroup[i].id;
    this.groupService.deleteGroup(id);
    this.userGroups.userGroup.splice(i, 1);
    this.userGroupService.updateUserGroup(this.userGroups);
  }

  drop(event: CdkDragDrop<UserGroup[]>): void {
    moveItemInArray(
      this.userGroups.userGroup,
      event.previousIndex,
      event.currentIndex
    );
    this.userGroupService.updateUserGroup(this.userGroups);
  }

  copyToClipboard(id: string) {
    const selBox = document.createElement('textarea');
    selBox.value = id;
    selBox.selectionStart = 0;
    selBox.selectionEnd = selBox.value.length;
    const s = selBox.style;
    s.position = 'fixed';
    s.left = '-100%';
    s.fontSize = '16px';
    document.body.appendChild(selBox);
    selBox.focus();
    document.execCommand('copy');
    selBox.blur();
    document.body.removeChild(selBox);
    this.openSnackBar('copied');
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
}
