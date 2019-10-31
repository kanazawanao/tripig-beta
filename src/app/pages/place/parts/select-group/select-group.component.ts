import { Component, OnInit, Input } from '@angular/core';
import { UserGroups } from 'src/app/models/user-group';
import { UserGroupService } from 'src/app/services/firestore/user-group.service';
import { Aria } from 'src/app/models/aria';

@Component({
  selector: 'app-select-group',
  templateUrl: './select-group.component.html',
  styleUrls: ['./select-group.component.scss']
})
export class SelectGroupComponent implements OnInit {
  @Input() aria: Aria = new Aria();
  userGroups: UserGroups = new UserGroups();
  constructor(private userGroupService: UserGroupService) { }

  ngOnInit() {
    this.userGroupService.getUserGroup().subscribe(res => {
      this.userGroups = res;
    });
  }
}
