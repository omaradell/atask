import { Component } from '@angular/core';


@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
})
export class NameComponent {
  userData: any = {}; // Store user data here

  showUserData() {
    alert(`User Data: ${JSON.stringify(this.userData)}`);
  }
}