import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cart, product } from '../data-type';
import { shelves } from '../shelves';
import { ShelvesService } from '../services/shelves.service';
@Component({
  selector: 'app-shelves-details',
  templateUrl: './shelves-details.component.html',
  styleUrls: ['./shelves-details.component.css']
})
export class ShelvesDetailsComponent implements OnInit {

  productData:undefined | product;
  productQuantity:number=1;
  removeCart=false;
  cartData:product|undefined;
  constructor(private activeRoute:ActivatedRoute, private shelves:ShelvesService) { }

  ngOnInit() {
    let productId= this.activeRoute.snapshot.paramMap.get('productId');
    console.warn(productId);
    productId && this.shelves.getProduct(productId).subscribe((result)=>{
      this.productData= result;
      let cartData= localStorage.getItem('localCart');
      if(productId && cartData){
        let items = JSON.parse(cartData);
        items = items.filter((item:product)=>productId=== item.id.toString());
        if(items.length){
          this.removeCart=true
        }else{
          this.removeCart=false
        }
      }

      let user = localStorage.getItem('user');
      if(user){
        let userId= user && JSON.parse(user).id;
        this.shelves.getCartList(userId);

        this.shelves['cartData'].subscribe((result: any[])=>{
          let item = result.filter((item:product)=>productId?.toString()===item.productId?.toString())
       if(item.length){
        this.cartData=item[0];
        this.removeCart=true;
       }
        })
      }
      
      
      
    })
    
  }
  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+=1;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1;
    }
  }

  addToCart(){
    if(this.productData){
      this.productData.quantity = this.productQuantity;
      if(!localStorage.getItem('user')){
        this.shelves.localAddToCart(this.productData);
        this.removeCart=true
      }else{
        let user = localStorage.getItem('user');
        let userId= user && JSON.parse(user).id;
        let cartData:cart={
          ...this.productData,
          productId: this.productData.id,
          userId,
          category: ''
        }
        delete cartData.id;
        this.shelves.addToCart(cartData).subscribe((result)=>{
          if(result){
           this.shelves.getCartList(userId);
           this.removeCart=true
          }
        })        
      }
      
    } 
  }
  removeToCart(productId:number){
    if(!localStorage.getItem('user')){
this.shelves.removeItemFromCart(productId)
    }else{
      console.warn("cartData", this.cartData);
      
      this.cartData && this.shelves.removeToCart(this.cartData.id)
      .subscribe((result)=>{
        let user = localStorage.getItem('user');
        let userId= user && JSON.parse(user).id;
        this.shelves.getCartList(userId)
      })
    }
    this.removeCart=false

  }

}
