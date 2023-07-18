import { Component, OnInit, Renderer2 } from '@angular/core';
import { AddtocartService } from '../api/addtocart.service';
import { AbstractControl,FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserItemService } from '../api/userItem.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
addtocartItems() {
throw new Error('Method not implemented.');
}
  public products:any=[];
  public total!: number;
  productPage: any;
  title : any = '';
  image: any = '';
  description: any = '';
  price: any = '';

  constructor(private addtocartService:AddtocartService,private http: HttpClient,
    private router: Router,
    private userItemService: UserItemService,
    private renderer: Renderer2) { }

  ngOnInit():void {
    this.addtocartService.getproduct()
    .subscribe((res: any)=>{
      this.products=res;

      if(this.products)this.getTotal(this.products);
     
    })
  }
  removeItem(item:any){
    this.addtocartService.removeCartItem(item);
    this.getTotal(this.products);


  }
  emptycart(){
    this.addtocartService.removeAllCart();
    this.getTotal(this.products);
  }
  
  quantity: number = 1;
  i = 1;
  plus(item: any) {
    if (item.quantity != 5) {
      item.quantity += 1;
    }
    this.getTotal(this.products);

  }
  minus(item: any) {
    if (item.quantity != 1) {
      item.quantity -= 1;
    }
    this.getTotal(this.products);
  }

  getTotal(res:any){
    let subs=0;
    for(const products of res)
      subs+=products.price * products.quantity;
      this.total=subs;
  }

  

}




function addtocartItems() {
  throw new Error('Function not implemented.');
}

