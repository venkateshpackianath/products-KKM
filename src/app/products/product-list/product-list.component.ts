import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { product } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: any[] = [];
  editMode = false;
  addMode = false;
  dataSource = new Array();
  displayedColumns = new Array();
  availability = "yes";
  name = '';
  price = 0;
  productCode = '';
  product = new product();
  @ViewChild('productForm') productForm: any;
  currentId = '';

  constructor(public userService : UserService, private route: ActivatedRoute){

  }

  ngOnInit(): void{
    this.products = this.route.snapshot.data['products'];
    this.displayedColumns = ["productCode", "name", "price", "availability", "actions"];
    this.dataSource = this.products;
  }
  add(){
    this.addMode = true;
    this.editMode = false;
    this.productForm?.reset();
  }
  cancel(){
    this.productForm?.reset();
    this.addMode = false;
    this.editMode = false;
    this.currentId = '';
  }
  addProduct(){
    if(this.addMode){
      if(this.productForm.valid){
        const payload : product = {
          productCode : this.productCode,
          name: this.name,
          price : this.price,
          availability : this.availability
        }
        this.userService.createProduct(payload).subscribe((data : any) =>{
          this.productForm.reset();
          this.getProducts();
        });
      }else{
        
      }
    }
    if(this.editMode){
      if(this.productForm.valid){
        const payload : product = {
          productCode : this.productCode,
          name: this.name,
          price : this.price,
          availability : this.availability,
        }
        this.userService.updateProduct(payload, this.currentId).subscribe((data : any) =>{
          this.productForm.reset();
          this.getProducts();
        });
      }else{
        
      }
    }
    
  }

  getProducts(){
    this.userService.getProducts().subscribe((data :any) =>{
      this.dataSource = data;
    });
  }

  delete(data:product){
    if(data){
      this.userService.deleteProduct(data._id).subscribe((data : any) =>{
        this.getProducts();
      })
    }
  }

  edit(data: product){
    this.editMode = true;
    this.addMode = false;
    this.productCode = data.productCode;
    this.price = data.price;
    this.availability = data.availability;
    this.name = data.name;
    this.currentId = data._id ? data._id : '';
  }



}
