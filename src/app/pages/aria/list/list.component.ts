import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  ariaList: string[] = [];
  constructor(private listService: ListService) {}

  ngOnInit() {
    this.ariaList = this.listService.getAllList();
  }
}
