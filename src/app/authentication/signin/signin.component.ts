import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private router: Router, private loginService: LoginService) {
    $(document).ready(function () {
      var $winwidth = $(window).width();
      $('img.login-img').attr({
        width: $winwidth
      });
      $(window).bind('resize', function () {
        var $winwidth = $(window).width();
        $('img.login-img').attr({
          width: $winwidth
        });
      });
    });
  }

  ngOnInit() {

  }


  login() {
    if (this.username == 'admin' && this.password == 'admin') {
      let loginCredentials = { email: this.username, password: this.password };
      // this.loginService.login(loginCredentials).subscribe(data => {
      //   console.log(data);
      //   if(data) {
      //     this.router.navigate(['home/dashboard']);
      //   }
        this.router.navigate(['home/dashboard']);
     // });
    } else {
      alert('Invalid credentials');
    }
  }
}
