import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'coding-challenge';
  appLogo = 'data_object'
  actionButton = { route: '/jobs/create', label: 'add new job', icon: 'add' }
  navItems = [
    {
      route: '/',
      label: 'home'
    },
    {
      route: '/jobs',
      label: 'jobs'
    }
  ];
}
