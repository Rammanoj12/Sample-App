import { Component } from '@angular/core';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComponentComponent,SecondComponentComponent,RouterLink,RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {}
