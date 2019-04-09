import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from "../authentication/signin/signin.component";
import { AuthenticationComponent } from "../authentication/authentication.component";

@NgModule({
  declarations: [
    AuthenticationComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthenticationModule { }
