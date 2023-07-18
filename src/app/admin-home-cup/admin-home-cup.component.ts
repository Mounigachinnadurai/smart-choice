import { Component, OnInit } from '@angular/core';
// import { AddtocartService } from '../api/addtocart.service';
// import { ApiService } from '../api/api.service';
import { cup,cart, order,product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin-home-cup',
  templateUrl: './admin-home-cup.component.html',
  styleUrls: ['./admin-home-cup.component.css']
})
export class AdminHomeCupComponent implements OnInit {
  [x: string]: any;

  productMessage: undefined | string;
  productList:undefined|product[];
  constructor(private product:ProductService) { }

  ngOnInit() {
    this.product.productList().subscribe((data)=> {
      this.productList=data;
    })
  
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((data) => {
      if (data) {
        this.productMessage = 'Product is deleted';

        // this.list();
      }
    });
  }
}

