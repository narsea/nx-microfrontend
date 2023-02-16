/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { CartService } from '@nx-workspace/shared/data-access-user';

@Component({
  selector: 'nx-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  public totalItem: number=0;
  public searchTerm !: string;


  constructor(private cartService: CartService){}
  ngOnInit(): void {
   this.cartService.getProducts().subscribe(res=>{
    this.totalItem = res.length;
   })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
