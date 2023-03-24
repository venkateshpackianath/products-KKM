import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from '../modules/material.module';
import { UserResolver } from './products.resolver';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../services/authGuard';



@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [ProductListComponent],
  providers : [UserResolver, AuthGuard]
})
export class ProductsModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/