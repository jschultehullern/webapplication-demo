import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabLink, MatTabNav, MatTabNavPanel } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';

export type Link = {
  translationId: string;
  route: string;
};

@Component({
  standalone: true,
  imports: [CommonModule, MatTabNav, MatTabLink, RouterLink, MatTabNavPanel],
  selector: 'navigation-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  links = input.required<Link[]>();
  activeLink = signal<Link | undefined>(undefined);

  setLinks = effect(() => this.activeLink.set(this.links()[0]), {
    allowSignalWrites: true,
  });
}
