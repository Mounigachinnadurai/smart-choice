import { Component, OnInit } from '@angular/core';
import { lights } from '../light';
import { ProductService } from '../services/product.service';
import { LightService } from '../services/light.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-light',
  templateUrl: './admin-add-light.component.html',
  styleUrls: ['./admin-add-light.component.css']
})
export class AdminAddLightComponent implements OnInit {
  [x: string]: any;
  addProductMessage: string | undefined;
  constructor(private light: LightService ,private router:Router) { }

  ngOnInit(): void {
  }
  submit(data: lights) {

    this.light.addProduct(data).subscribe((result: any) => {
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
