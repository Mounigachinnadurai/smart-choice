import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, priceSummary } from '../data-type';
import { ShelvesService } from '../services/shelves.service';

@Component({
  selector: 'app-shelves-cart',
  templateUrl: './shelves-cart.component.html',
  styleUrls: ['./shelves-cart.component.css']
})
export class ShelvesCartComponent implements OnInit {

  cartData: cart[] | undefined;
  priceSummary: priceSummary = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }
  constructor(private shelves: ShelvesService, private router: Router) { }

  ngOnInit() {
    this.loadDetails()
  }
  removeToCart(cartId:number|undefined){
    cartId && this.cartData && this.shelves.removeToCart(cartId)
    .subscribe((result)=>{
      this.loadDetails();
    })
  }

  loadDetails(){
    this.shelves.currentCart().subscribe((result) => {
      this.cartData = result;
      console.warn(this.cartData);
      let price = 0;
      result.forEach((item) => {
        if (item.quantity) {
          price = price + (+item.price * +item.quantity)
        }
      })
      this.priceSummary.price = price;
      this.priceSummary.discount = price / 10;
      this.priceSummary.tax = price / 10;
      this.priceSummary.delivery = 100;
      this.priceSummary.total = price + (price / 10) + 100 - (price / 10);

    if(!this.cartData.length){
      this.router.navigate(['/'])
    }

    })
  }




  checkout() {
    this.router.navigate(['/checkout'])
  }

}
