import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/authentication', pathMatch: 'full' },
  {
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
