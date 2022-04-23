/* eslint-disable id-blacklist */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable new-parens */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User1 } from '../../models/user1';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class SignupPage implements OnInit {

  regForm: User1 = new User1;
  errors = [];

  msg: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }


checkP(){
  if(this.regForm.password !== this.regForm.conPassword){};
}

signup(){

    this.authService.signUp(this.regForm).subscribe({
      next: data => {
        console.log('Sign in data:',data);
        this.errors = [];

        this.router.navigate(['/login']);

      },
      error: err => {
        this.errors[0] = err.message;
      }
    });
  }

}
