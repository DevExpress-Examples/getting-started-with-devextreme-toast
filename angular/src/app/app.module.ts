import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
 
import {
    DxButtonModule, DxToastModule
} from 'devextreme-angular';
 
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DxToastModule,
        DxButtonModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }