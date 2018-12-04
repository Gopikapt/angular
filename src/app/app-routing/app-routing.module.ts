import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { AddProductsComponent } from '../components/add-products/add-products.component';


const routes:Routes=[
  {path:"",component:ProductListComponent},
  {path:"add",component:AddProductsComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
