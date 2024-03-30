import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFacade } from '@webapplication-demo/todo/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private listFacade: ListFacade) {}

  ngOnInit() {}
}
