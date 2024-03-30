import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderFacade } from '@webapplication-demo/navigation/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'navigation-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private headerFacade: HeaderFacade) {}

  ngOnInit() {}
}
