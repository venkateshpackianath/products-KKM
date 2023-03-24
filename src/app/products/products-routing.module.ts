import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/authGuard';
import { ProductListComponent } from './product-list/product-list.component';
import { UserResolver } from './products.resolver';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent,
    resolve: { products : UserResolver },
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/