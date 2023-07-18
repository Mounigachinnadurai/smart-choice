import { Component, OnInit } from '@angular/core';
import { order } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-take-orders',
  templateUrl: './take-orders.component.html',
  styleUrls: ['./take-orders.component.css']
})
export class TakeOrdersComponent implements OnInit {

  orderData:order[]|undefined
  constructor(private product:ProductService) { }

  ngOnInit() {
    this.getOrderList()
  }
  cancelOrder(orderId:number|undefined){
    orderId && this.product.cancelOrder(orderId).subscribe((result)=>{
      if(result){
        this.getOrderList();
      }
    })
  }
  getOrderList(){
    this.product.orderList().subscribe((result)=>{
      this.orderData=result;
    })
  }


}
