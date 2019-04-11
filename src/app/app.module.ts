import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Main Component
import { AppComponent } from './app.component';
// Main Routing
import { AppRoutingModule } from './app-routing.module';
// Custom Modules
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';

import { LoginService } from './services/login.service';
import { InterceptorService } from './services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthenticationModule,
    HttpClientModule,
    HomeModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    // AngularFontAwesomeModule
  ],
  providers: [ LoginService , {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
