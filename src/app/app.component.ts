import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 navList = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Register', path: '/candidateRegister' },
    { name: 'Search', path: '/candidateSearch' },
    { name: 'Events', path: '/eventPost' },
    { name: 'Job Post', path: '/jobPost' },
    { name: 'About Us', path: '/aboutUs' }
  ];
}
