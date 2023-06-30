import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


function transformTitle(title: string): string {
   // Remove spaces and capitalize the first letter of each word
   return title.replace(/\b\w/g, (match) => match.toUpperCase()).replace(/\s+/g, '');
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgFor, MatButtonModule, MatToolbarModule, MatIconModule, RouterModule],
})
export class HeaderComponent {
  @Input({ transform: transformTitle }) title: string | undefined;
  @Input() logo: string | undefined;
  @Input() actionButton: { route: string; label: string; icon: string; } | undefined;
  @Input() navItems: { route: string; label: string; }[] | undefined;

}
