import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.scss']
})
export class WelcomeCardComponent {
  @Input() title: string | undefined;
  @Input() welcomeMessage: string | undefined;
}
