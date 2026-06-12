import { Component, ChangeDetectionStrategy } from '@angular/core';
import notify from 'devextreme/ui/notify';

import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToastModule } from 'devextreme-angular/ui/toast';

@Component({
    selector: 'app-root',
    imports: [DxButtonModule, DxToastModule],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
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
