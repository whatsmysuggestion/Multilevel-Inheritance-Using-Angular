import { Component } from '@angular/core';
import { SecondComponent } from './second/second.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends SecondComponent {
  title = this.sum()/2;
}
