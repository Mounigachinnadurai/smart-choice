import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { clock } from '../clock';
// import { ProductService } from '../services/product.service';
import { ClockService } from '../services/clock.service';

@Component({
  selector: 'app-admin-add-clock',
  templateUrl: './admin-add-clock.component.html',
  styleUrls: ['./admin-add-clock.component.css']
})
export class AdminAddClockComponent implements OnInit {
  [x: string]: any;

  addProductMessage: string | undefined;
  constructor(private clock: ClockService) { }

  ngOnInit(): void {
  }
  submit(data: product) {

    this['clock'].addProduct(data).subscribe((result: any) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'Product is added successfully';
      }
    });
    setTimeout(() => {
      this.addProductMessage = undefined
    }, 3000);
  }

}
