import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../authentication/signin/signin.component';
import { AuthenticationComponent } from '../authentication/authentication.component';

const authroutes: Routes = [
  { path: '', redirectTo: 'authentication/login', pathMatch: 'full' },
  {
    path: 'authentication', component: AuthenticationComponent, children: [
      {
        path: 'login',
        component: SigninComponent
      }]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forChild(authroutes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
