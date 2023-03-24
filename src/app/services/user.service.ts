import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { user } from '../login/user.model';
import { product } from '../products/product-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "https://crudcrud.com/api/277506b2815d4be4aaafdcfd11707168";
  //baseUrl = "";
  isLoggedIn = new BehaviorSubject(false);
  userName = new BehaviorSubject('');

  constructor(public http: HttpClient) { 
    
  }

  public createUser(payload: user){
    return this.http.post(this.baseUrl + '/user', payload);
  }

  public getUsers(){
    return this.http.get(this.baseUrl + '/user');
  }

  public getProducts(){
    return this.http.get(this.baseUrl + '/products');
  }

  public createProduct(payload: product){
    return this.http.post(this.baseUrl + '/products', payload);
  }

  public deleteProduct(data: any){
    return this.http.delete(this.baseUrl + '/products/' +  data);
  }

  public updateProduct(data : product, id: string){
    return this.http.put(this.baseUrl + '/products/' + id, data);
  }

  
}
