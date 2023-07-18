import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { shelves } from '../shelves';
import { ShelvesService } from '../services/shelves.service';
@Component({
  selector: 'app-admin-update-shelves',
  templateUrl: './admin-update-shelves.component.html',
  styleUrls: ['./admin-update-shelves.component.css']
})
export class AdminUpdateShelvesComponent implements OnInit {

  productData: undefined | shelves;
  productMessage: undefined | string;
  // product: any;
  constructor(private route: ActivatedRoute, private shelves: ShelvesService) { }

  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId &&
      this.shelves.getProduct(productId).subscribe((data:any) => {
        console.warn(data);
        this.productData = data;
      });
  }
  submit(data: any) {
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.shelves.updateProduct(data).subscribe((result: any) => {
      if (result) {
        this.productMessage = 'Product has updated';
      }
    });
    
  }

}
