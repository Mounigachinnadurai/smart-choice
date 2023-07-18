import { Component, OnInit } from '@angular/core';
// import { cup,cart, order,product } from '../data-type';
// import { ShelvesService } from '../services/shelves.service';
import { ShelvesService } from '../services/shelves.service';
import { shelves } from '../data-type';


@Component({
  selector: 'app-admin-home-shelves',
  templateUrl: './admin-home-shelves.component.html',
  styleUrls: ['./admin-home-shelves.component.css']
})
export class AdminHomeShelvesComponent implements OnInit {

  [x: string]: any;
  productMessage: undefined | string;
  productList:undefined|shelves[];
  constructor(private shelves:ShelvesService) { }

  ngOnInit() {
    this.shelves.productList().subscribe((data: any)=> {
      this.productList=data;
    })
  }
  deleteProduct(id: number) {
    this.shelves.deleteProduct(id).subscribe((data: any) => {
      if (data) {
        this.productMessage = 'Product is deleted';

        // this.list();
      }
    });
  }

}
