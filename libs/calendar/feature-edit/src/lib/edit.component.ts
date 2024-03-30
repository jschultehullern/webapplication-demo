import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFacade } from '@webapplication-demo/calendar/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'calendar-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(private editFacade: EditFacade) {}

  ngOnInit() {}
}
