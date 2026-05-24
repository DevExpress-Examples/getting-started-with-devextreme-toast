import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  types = ['error', 'info', 'success', 'warning'];

  isVisible = false;

  showMessage(): void {
    notify(
      {
        message: 'You have a new message',
        width: 230,
        position: {
          at: 'bottom',
          my: 'bottom',
          of: '#container',
        },
      },
      this.types[Math.floor(Math.random() * 4)],
      500,
    );
  }

  showCustomMessage(): void {
    this.isVisible = true;
  }
}
