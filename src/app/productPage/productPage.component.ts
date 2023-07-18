import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cart, product } from '../data-type';
import { ShelvesService } from '../services/shelves.service';


@Component({
  selector: 'app-productPage',
  templateUrl: './productPage.component.html',
  styleUrls: ['./productPage.component.css']
})
export class ProductPageComponent implements OnInit {
  

  productData:undefined | product;
  productQuantity:number=1;
  removeCart=false;
  cartData:product|undefined;
  public productList:any;
  constructor(private activeRoute:ActivatedRoute, private shelves:ShelvesService ) { }
  ngOnInit():void 
  
  {
    this.shelves.productList().subscribe((data)=> {
      this.productList=data;

      
    })

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
}
