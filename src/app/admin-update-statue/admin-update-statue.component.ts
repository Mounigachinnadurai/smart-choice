import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { statue } from '../statue';
import { StatueService } from '../services/statue.service';

@Component({
  selector: 'app-admin-update-statue',
  templateUrl: './admin-update-statue.component.html',
  styleUrls: ['./admin-update-statue.component.css']
})
export class AdminUpdateStatueComponent implements OnInit {
  productData: undefined | statue;
  productMessage: undefined | string;

  constructor(private route: ActivatedRoute, private statue: StatueService) { }

  ngOnInit() :void{
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId &&
      this.statue.getProduct(productId).subscribe((data) => {
        console.warn(data);
        this.productData = data;
      });
  }
  submit(data: any) {
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.statue.updateProduct(data).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product has updated';
      }
    });

  }

}
