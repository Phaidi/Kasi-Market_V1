import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User1 } from '../../models/user1';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logForm: User1 = new User1();
  errors = [];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.logIn(this.logForm).subscribe({
      next: data => {
        console.log('Log in data:',data)
        this.errors = [];

        this.router.navigate(['/home/listing'])

      },
      error: err => {
        this.errors[0] = err.message;
      }
    })
  }

}
