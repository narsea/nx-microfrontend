import { Component, OnInit } from '@angular/core';
import { ProductList, ProductsService } from '@nx-workspace/shared/data-access-user';

@Component({
  selector: 'nx-workspace-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(public productService: ProductsService) {}

  productList: ProductList[] = []
  
    ngOnInit() {
      this.getProductsList();
  }

  getProductsList(){
    this.productService.getProductList().subscribe((products) => {
      console.log(products);
      this.productList = products;
    });
  }

}
