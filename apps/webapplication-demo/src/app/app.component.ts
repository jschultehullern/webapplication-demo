import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  HeaderComponent,
  Link,
} from '@webapplication-demo/navigation/feature-header';

const linkList: Link[] = [
  { translationId: 'ToDo Liste', route: '' },
  { translationId: 'Erinnerungen', route: '' },
  { translationId: 'Kalender', route: '' },
];

@Component({
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  links = signal(linkList);
}
