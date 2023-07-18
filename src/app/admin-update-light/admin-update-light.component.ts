import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { lights } from '../light';
import { LightService } from '../services/light.service';


@Component({
  selector: 'app-admin-update-light',
  templateUrl: './admin-update-light.component.html',
  styleUrls: ['./admin-update-light.component.css']
})
export class AdminUpdateLightComponent implements OnInit {
  productData: undefined | lights;
  productMessage: undefined | string;
  constructor(private route: ActivatedRoute, private light: LightService) { }

  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId &&
      this.light.getProduct(productId).subscribe((data:any) => {
        console.warn(data);
        this.productData = data;
      });
  }
  submit(data: any) {
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.light.updateProduct(data).subscribe((result: any) => {
      if (result) {
        this.productMessage = 'Product has updated';
      }
    });
    
  }

}
