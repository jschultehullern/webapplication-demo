import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFacade } from '@webapplication-demo/reminder/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'reminder-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private listFacade: ListFacade) {}

  ngOnInit() {}
}
