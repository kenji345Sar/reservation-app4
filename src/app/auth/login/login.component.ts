import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    errors: any = []

    constructor(
      private authSservice: AuthService,
      private router: Router
    ) { }

    ngOnInit() {}

    login(loginForm) {
      console.log(loginForm.value)
      this.authSservice.login(loginForm.value).subscribe(
        (token) => {
            console.log(token)
            this.router.navigate(['/products'])
        },
        (err: HttpErrorResponse) => {
            console.error(err)
            this.errors = err.error.errors
        }
      )
    }

}
