import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular Specific
    BrowserModule,
    BrowserAnimationsModule,

    // Third Party

    // Core & Shared Modules
    CoreModule.forRoot(),
    SharedModule,

    // App Module
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
