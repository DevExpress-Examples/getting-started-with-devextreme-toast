import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToastModule } from 'devextreme-angular/ui/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DxButtonModule, DxToastModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
