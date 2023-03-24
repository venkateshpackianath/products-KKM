import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { user } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = '';
  password = '';
  error = '';
  login : boolean = true;
  user = new user();

  constructor(public router : Router, public userService : UserService){

  }

  ngOnInit(): void {
    this.login = true;
    localStorage.clear();
    this.userService.isLoggedIn.next(false);
    localStorage.removeItem('overClockUser');
  }

  hideError(){
    setInterval(() => {
      this.error = '';
      }, 2000);
  }

  proceed(){
    const payload : user = {
      userName : this.name,
      password : this.password
    }
    if(!this.login){
      this.userService.createUser(payload).subscribe(data =>{
        this.login = true;
        this.error = '';
      },
      error =>{
        this.error = "Error is User Creation";
      });
    }
    else{
      this.userService.getUsers().subscribe((data: any) =>{
        if(data && data.length > 0){
          const result = data.find((d: any) => { return d.userName ==  this.name});
          if(result){
            if(result.password == this.password){
              this.userService.isLoggedIn.next(true);
              this.userService.userName.next(this.name);
              localStorage.setItem('userName', this.name);
              this.router.navigate(['products/product-list']);
              localStorage.setItem('isLoggedIn', "true");
            }else{
              this.error = "Password Incorrect";
            }
          }
          else{
            this.error = "Username not Present";
          }
        }else{
          this.error = "Username not Present";
        }
      });
    }
    this.hideError();
  }

}
