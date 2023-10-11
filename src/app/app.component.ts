import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ember';
  options = [
    {path: '/home', title: 'Home'},
    {path: '/store/bundles', title: 'Bundles'},
  ]
}
