import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLoggedIn = false;
  userName : any;

  constructor(public userService : UserService){
  
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.userService.isLoggedIn.subscribe(data =>{
      if(data){
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false;
        this.userName = '';
        localStorage.removeItem('overClockUser');
      }
    });
    this.userService.userName.subscribe(data =>{
      if(data){
        this.userName = data;
      }
    });
    if(localStorage.getItem('isLoggedIn') === "true"){
      this.isLoggedIn = true;
    }
  }

}
