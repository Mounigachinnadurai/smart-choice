import { Component, OnInit } from '@angular/core';
import { StatueService } from '../services/statue.service';
import { statue } from '../statue';

@Component({
  selector: 'app-admin-home-statue',
  templateUrl: './admin-home-statue.component.html',
  styleUrls: ['./admin-home-statue.component.css']
})
export class AdminHomeStatueComponent implements OnInit {

  [x: string]: any;
  productMessage: undefined | string;
  productList:undefined|statue[];
  constructor(private statue:StatueService) { }

  ngOnInit():void {
    this.statue.productList().subscribe((data: any)=> {
      this.productList=data;
    })
  }
  deleteProduct(id: number) {
    this.statue.deleteProduct(id).subscribe((data: any) => {
      if (data) {
        this.productMessage = 'Product is deleted';

        // this.list();
      }
    });
  }

  }


