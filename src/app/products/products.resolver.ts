import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class UserResolver implements Resolve<Observable<any>> {
  constructor(private userService: UserService) {}

  resolve(): Observable<any> {
    return this.userService.getProducts();
  }
}