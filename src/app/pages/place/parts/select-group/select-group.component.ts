import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { GroupService } from 'src/app/services/firestore/group.service';
import { UserGroups } from 'src/app/models/user-group';
import { Observable, Subscription } from 'rxjs';
import { UserGroupService } from 'src/app/services/firestore/user-group.service';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-select-group',
  templateUrl: './select-group.component.html',
  styleUrls: ['./select-group.component.scss']
})
export class SelectGroupComponent implements OnInit, OnDestroy {
  @Input() place: Place = new Place();
  subscriptions: Subscription[] = [];
  userGroups$?: Observable<UserGroups | undefined>;
  userGroups: UserGroups =  new UserGroups();
  constructor(private userGroupService: UserGroupService) { }

  ngOnInit() {
    this.userGroups$ = this.userGroupService.getUserGroup();
    this.subscriptions.push(this.userGroups$.subscribe(u => this.userGroups = u ? u : new UserGroups()));
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
