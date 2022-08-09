import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular Specific
    BrowserModule,

    // Core & Shared Modules
    CommonModule,

    // App Module
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
