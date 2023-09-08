import { Component } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(dir: Directionality) {
    console.log(dir.value);

    dir.change.subscribe((changes) => {
      console.log(changes);
    });
  }
  
}
