/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { CartService, ProductList, ProductsService } from '@nx-workspace/shared/data-access-user';

@Component({
  selector: 'nx-workspace-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductsService, private cartService : CartService) {}

  productList: ProductList[] = []
  searchKey:string ="";
  public filterCategory : any

    ngOnInit() {
      this.getProductsList();
  }

  getProductsList(){
    this.productService.getProductList().subscribe((products) => {
      console.log(products);
      this.productList = products;
      this.filterCategory = products;

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
}
