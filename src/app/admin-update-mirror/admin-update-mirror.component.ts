import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mirror } from '../mirror';
import { MirrorService } from '../services/mirror.service';

@Component({
  selector: 'app-admin-update-mirror',
  templateUrl: './admin-update-mirror.component.html',
  styleUrls: ['./admin-update-mirror.component.css']
})
export class AdminUpdateMirrorComponent implements OnInit {
  productData: undefined | mirror;
  productMessage: undefined | string;


  constructor(private route: ActivatedRoute, private mirror: MirrorService) { }

  ngOnInit() :void{
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId &&
      this.mirror.getProduct(productId).subscribe((data) => {
        console.warn(data);
        this.productData = data;
      });
  }
  submit(data: any) {
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.mirror.updateProduct(data).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product has updated';
      }
    });
  }

}
