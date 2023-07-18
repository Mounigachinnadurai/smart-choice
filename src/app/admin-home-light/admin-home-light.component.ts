import { Component, OnInit } from '@angular/core';
// import { AddtocartService } from '../api/addtocart.service';
// import { ApiService } from '../api/api.service';
import { cup,cart, order,product } from '../data-type';
import { LightService } from '../services/light.service';

@Component({
  selector: 'app-admin-home-light',
  templateUrl: './admin-home-light.component.html',
  styleUrls: ['./admin-home-light.component.css']
})
export class AdminHomeLightComponent implements OnInit {

  [x: string]: any;

  productMessage: undefined | string;
  productList:undefined|product[];
  constructor(private light:LightService) { }

  ngOnInit() {
    this.light.productList().subscribe((data)=> {
      this.productList=data;
    })
  
  }

  deleteProduct(id: number) {
    this.light.deleteProduct(id).subscribe((data) => {
      if (data) {
        this.productMessage = 'Product is deleted';

        // this.list();
      }
    });
  }




  //   this.api.lights()
  //   .subscribe(res=>{
  //     this.productList=res;

  //     this.productList.forEach((a:any)=>{
  //       Object.assign(a,{quantity:1,total:a.price});
  //     });
  //   })
  // }
  // addtocart(item:any){
  //   this.addtocartService.addtocart(item);

  // }
  }


