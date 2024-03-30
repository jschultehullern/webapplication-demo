import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFacade } from '@webapplication-demo/reminder/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'reminder-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(private createFacade: CreateFacade) {}

  ngOnInit() {}
}
