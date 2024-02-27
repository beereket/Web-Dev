import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {ProductItemComponent} from "./product-item/product-item.component";
import {ProductListComponent} from "./product-list/product-list.component";



const routes: Routes = [

]

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,


  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/