import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFacade } from '@webapplication-demo/reminder/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'reminder-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(private editFacade: EditFacade) {}

  ngOnInit() {}
}
