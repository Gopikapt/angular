import { Component, OnInit } from '@angular/core';
import {IProduct} from './product.model';
import { ProductService } from '../../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]
})

export class ProductListComponent implements OnInit {
  pageTitle:string="Product List";
  products:IProduct[];
  showImage:boolean=false;
  toggleIm():void{
    this.showImage=!this.showImage;
  }

  constructor(private ps:ProductService) {
  }

  ngOnInit():void {
    this.products=this.ps.getProducts();
  }

}
