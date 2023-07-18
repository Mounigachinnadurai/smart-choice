import { Component, OnInit } from '@angular/core';
import { MirrorService } from '../services/mirror.service';
import { mirror } from '../mirror';

@Component({
  selector: 'app-admin-home-mirror',
  templateUrl: './admin-home-mirror.component.html',
  styleUrls: ['./admin-home-mirror.component.css']
})
export class AdminHomeMirrorComponent implements OnInit {
  [x: string]: any;
  productMessage: undefined | string;
  productList:undefined|mirror[];

  constructor(private mirror:MirrorService) { }

  ngOnInit():void {
    this.mirror.productList().subscribe((data: any)=> {
      this.productList=data;
    })
  }
  deleteProduct(id: number) {
    this.mirror.deleteProduct(id).subscribe((data: any) => {
      if (data) {
        this.productMessage = 'Product is deleted';

        // this.list();
      }
    });
  }

}
