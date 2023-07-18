import { Component, OnInit } from '@angular/core';
import { ClockService } from '../services/clock.service';
import { clock } from '../clock';

@Component({
  selector: 'app-admin-home-clock',
  templateUrl: './admin-home-clock.component.html',
  styleUrls: ['./admin-home-clock.component.css']
})
export class AdminHomeClockComponent implements OnInit {
  [x: string]: any;
  productMessage: undefined | string;
  productList:undefined|clock[];

  constructor(private clock:ClockService) { }

  ngOnInit() :void{
    this.clock.productList().subscribe((data: any)=> {
      this.productList=data;
    })
  }
  deleteProduct(id: number) {
    this.clock.deleteProduct(id).subscribe((data: any) => {
      if (data) {
        this.productMessage = 'Product is deleted';

        // this.list();
      }
    });
  }

}
