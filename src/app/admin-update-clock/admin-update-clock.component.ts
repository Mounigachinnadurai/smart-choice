import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { clock } from '../clock';
import { ClockService } from '../services/clock.service';


@Component({
  selector: 'app-admin-update-clock',
  templateUrl: './admin-update-clock.component.html',
  styleUrls: ['./admin-update-clock.component.css']
})
export class AdminUpdateClockComponent implements OnInit {
  productData: undefined | clock;
  productMessage: undefined | string;

  constructor(private route: ActivatedRoute, private clock: ClockService) { }

  ngOnInit() :void{
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId &&
      this.clock.getProduct(productId).subscribe((data) => {
        console.warn(data);
        this.productData = data;
      });
  }
  submit(data: any) {
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.clock.updateProduct(data).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product has updated';
      }
    });

  }

}
