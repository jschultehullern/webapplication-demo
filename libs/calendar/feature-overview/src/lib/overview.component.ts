import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewFacade } from '@webapplication-demo/calendar/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'calendar-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  constructor(private overviewFacade: OverviewFacade) {}

  ngOnInit() {}
}
