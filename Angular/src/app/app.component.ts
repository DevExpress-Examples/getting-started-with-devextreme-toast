import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  types = ['error', 'info', 'success', 'warning'];
  showMessage() {
    notify({
      message: "You have a new message", 
      width: 230,
      position: {
        at: "bottom",
        my: "bottom",
        of: "#container"
      }
    }, 
    this.types[Math.floor(Math.random() * 4)], 
    500
    );
  }
  isVisible: boolean = false;
  showCustomMessage() {
    this.isVisible = true;
  }
}
