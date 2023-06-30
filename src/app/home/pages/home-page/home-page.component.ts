import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public title = 'Welcome to the Coding Challenge Job Posting Application';
  public content = 'We are excited to have you on board! This application is built with Angular and Angular Material, using NgRx as a state management library on front end, and provides a basic CRUD functionalities on the back-end with Nest.js. With our responsive interface, you can easily view and search job ads or upload your own. Enjoy!'
}
