import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { shelves } from '../data-type';
import { ShelvesService } from '../services/shelves.service';


@Component({
  selector: 'app-admin-add-shelves',
  templateUrl: './admin-add-shelves.component.html',
  styleUrls: ['./admin-add-shelves.component.css']
})
export class AdminAddShelvesComponent implements OnInit {
  [x: string]: any;

  addProductMessage: string | undefined;
  // product: any;
  constructor(private shelves: ShelvesService) { }

  ngOnInit(): void {
  }
  submit(data: product) {

    this['shelves'].addProduct(data).subscribe((result: any) => {
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
