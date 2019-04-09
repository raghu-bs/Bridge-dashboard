import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Main Component
import { AppComponent } from './app.component';
// Main Routing
import { AppRoutingModule } from './app-routing.module';
// Custom Modules
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthenticationModule,
    HomeModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
