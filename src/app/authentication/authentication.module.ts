import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from "../authentication/signin/signin.component";
import { AuthenticationComponent } from "../authentication/authentication.component";
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatCardModule, MatSnackBarModule,
  MatListModule, MatMenuModule, MatBadgeModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
  MatTableModule, MatTabsModule, MatProgressSpinnerModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthenticationComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatCardModule, MatSnackBarModule,
    MatListModule, MatMenuModule, MatBadgeModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatTableModule, MatTabsModule, MatProgressSpinnerModule
  ]
})
export class AuthenticationModule { }
