import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material.module';



@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/