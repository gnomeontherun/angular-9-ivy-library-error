import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClrAngularModule } from '@clr/angular';
// import { ClrAngularModule } from '../../projects/clr-angular/src/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClrAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
