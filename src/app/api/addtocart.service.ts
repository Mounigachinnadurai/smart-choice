import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {
  [x: string]: any;
  public productList=new BehaviorSubject<any>([]);
  public cartItemList:any=[]

constructor(private client:HttpClient) { }

getproduct(){
  return this.productList.asObservable();
}
setProduct(product:any){
  this.cartItemList.push(...product);
  this.productList.next(product);
}
addtocart(product:any){
  this.cartItemList.push(product);
  this.productList.next(this.cartItemList);
  this.getTotalPrice();
  console.log(this.cartItemList);

}
getTotalPrice():number{
  let grandTotal=0;
  this.cartItemList.map((a:any)=>{
    grandTotal += a.total;

  })
  return grandTotal;
}
removeCartItem(product:any){
  this.cartItemList.map((a:any,index:any)=>{
    if(product.id===a.id){
      this.cartItemList.splice(index,1);
    }
  })
  this.productList.next(this.cartItemList);
}
removeAllCart(){
  this.cartItemList=[]
  this.productList.next(this.cartItemList);
}
addUserItem(body:any){

  return this.client.post("http://localhost:3000/addtocart",body);


}


}
