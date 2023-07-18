import { Component, OnInit } from '@angular/core';
import { cup,cart, order,product } from '../data-type';
import { statue } from '../statue';
// import { ShelvesService } from '../services/shelves.service';

import { StatueService } from '../services/statue.service';

@Component({
  selector: 'app-admin-add-statue',
  templateUrl: './admin-add-statue.component.html',
  styleUrls: ['./admin-add-statue.component.css']
})
export class AdminAddStatueComponent implements OnInit {

  [x: string]: any;

  addProductMessage: string | undefined;

  productMessage: undefined | string;
  productList:undefined|product[];
  constructor(private statue :StatueService) { }

  ngOnInit() :void{
  }
  submit(data: product) {

    this['statue'].addProduct(data).subscribe((result: any) => {
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



