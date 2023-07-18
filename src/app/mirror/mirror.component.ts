import { Component, OnInit } from '@angular/core';
// import { AddtocartService } from '../api/addtocart.service';
// import { ApiService } from '../api/api.service';
import { ActivatedRoute } from '@angular/router';
import { cart, light, product } from '../data-type';
import { mirror } from '../mirror';
import { MirrorService } from '../services/mirror.service';

@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.css']
})
export class MirrorComponent implements OnInit {

  productData:undefined | product;
  productQuantity:number=1;
  removeCart=false;
  cartData:product|undefined;
  public productList:any;
  constructor(private activeRoute:ActivatedRoute, private mirror:MirrorService) { }

  ngOnInit() :void{

   
    this.mirror.productList().subscribe((data)=> {
      this.productList=data;

      
    })

    let productId= this.activeRoute.snapshot.paramMap.get('productId');
    console.warn(productId);
    productId && this.mirror.getProduct(productId).subscribe((result)=>{
      this.productData= result;
      let cartData= localStorage.getItem('localCart');
      if(productId && cartData){
        let items = JSON.parse(cartData);
        items = items.filter((item:light)=>productId=== item.id.toString());
        if(items.length){
          this.removeCart=true
        }else{
          this.removeCart=false
        }
      }

      let user = localStorage.getItem('user');
      if(user){
        let userId= user && JSON.parse(user).id;
        this.mirror.getCartList(userId);

        this.mirror['cartData'].subscribe((result: any[])=>{
          let item = result.filter((item:light)=>productId?.toString()===item.productId?.toString())
       if(item.length){
        this.cartData=item[0];
        this.removeCart=true;
       }

      
      })
    
    }
      
  })


  }

}
