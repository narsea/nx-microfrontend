import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductList } from './products';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  // private productlist: string = 'https://dummyjson.com/products'
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private productlist = 'https://fakestoreapi.com/products'
  constructor(private http: HttpClient) { }

  getProductList(): Observable<ProductList[]> {
    return this.http.get<ProductList[]>(this.productlist);
  }

  // getProductList(){
  //   return this.http.get('https://mocki.io/v1/6237ceb7-e2a6-4410-9de0-bd94ed69e502')
  // }
}
