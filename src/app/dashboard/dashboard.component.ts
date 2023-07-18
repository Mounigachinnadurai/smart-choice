import { Component, OnInit } from '@angular/core';
// import { AddtocartService } from '../api/addtocart.service';
// import { ApiService } from '../api/api.service';
// import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { cup,cart, order,product } from '../data-type';
import { ProductService } from '../services/product.service';
// import { ProductPageComponent } from '../productPage/productPage.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productMessage: undefined | string;
  productList:undefined|product[];
  constructor(private product:ProductService,private router:Router) { }
 

  ngOnInit():void {
    this.product.productList().subscribe((data)=> {
      this.productList=data;
    })
  
  }

  // deleteProduct(id: number) {
  //   this.product.deleteProduct(id).subscribe((data) => {
  //     if (data) {
  //       this.productMessage = 'Product is deleted';

  //       // this.list();
  //     }
  //   });
    
  // }

}
