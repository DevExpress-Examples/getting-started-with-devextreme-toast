import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

import { DxButtonModule } from 'devextreme-angular/ui/button';

@Component({
    selector: 'app-root',
    imports: [DxButtonModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
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
