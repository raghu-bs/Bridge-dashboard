import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }
    login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      let loginCredentials = {email: this.username, password: this.password};
      // this.loginService.login(loginCredentials).subscribe(data => {
      //   console.log(data);
      // });
     this.router.navigate(['home/dashboard']);
    }else {
      alert("Invalid credentials");
    }
  }
}
