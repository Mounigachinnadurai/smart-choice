import { Component, OnInit } from '@angular/core';
import { cart, product } from '../data-type';
import { ProductService } from '../services/product.service';
import { StatueService } from '../services/statue.service';
import { statue } from '../statue';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statue-details',
  templateUrl: './statue-details.component.html',
  styleUrls: ['./statue-details.component.css']
})
export class StatueDetailsComponent implements OnInit {
  productData:undefined | product;
  productQuantity:number=1;
  removeCart=false;
  cartData:product|undefined;
  productData1:undefined | statue;
  cartData1:statue|undefined;

  constructor(private activeRoute:ActivatedRoute, private statue:StatueService) { }

  ngOnInit():void {
    let productId= this.activeRoute.snapshot.paramMap.get('productId');
    console.warn(productId);
    productId && this.statue.getProduct(productId).subscribe((result)=>{
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
        this.statue.getCartList(userId);

        this.statue['cartData'].subscribe((result: any[])=>{
          let item = result.filter((item:product)=>productId?.toString()===item.productId?.toString())
       if(item.length){
        this.cartData=item[0];
        this.removeCart=true;
       }
        })
      }
      
      
      
    })

    let productId1= this.activeRoute.snapshot.paramMap.get('productId');
    console.warn(productId);
    productId && this.statue.getProduct(productId).subscribe((result)=>{
      this.productData= result;
      let cartData= localStorage.getItem('localCart');
      if(productId && cartData){
        let items = JSON.parse(cartData);
        items = items.filter((item:statue)=>productId=== item.id.toString());
        if(items.length){
          this.removeCart=true
        }else{
          this.removeCart=false
        }
      }

      let user = localStorage.getItem('user');
      if(user){
        let userId= user && JSON.parse(user).id;
        this.statue.getCartList(userId);

        this.statue['cartData'].subscribe((result: any[])=>{
          let item = result.filter((item:statue)=>productId?.toString()===item.productId?.toString())
       if(item.length){
        this.cartData1=item[0];
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
        this.statue.localAddToCart(this.productData);
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
        this.statue.addToCart(cartData).subscribe((result)=>{
          if(result){
           this.statue.getCartList(userId);
           this.removeCart=true
          }
        })        
      }
      
    } 
  }
  removeToCart(productId:number){
    if(!localStorage.getItem('user')){
this.statue.removeItemFromCart(productId)
    }else{
      console.warn("cartData", this.cartData);
      
      this.cartData && this.statue.removeToCart(this.cartData.id)
      .subscribe((result)=>{
        let user = localStorage.getItem('user');
        let userId= user && JSON.parse(user).id;
        this.statue.getCartList(userId)
      })
    }
    this.removeCart=false

  }

}
