import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../api/addtocart.service';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-sculptures',
  templateUrl: './sculptures.component.html',
  styleUrls: ['./sculptures.component.css']
})
export class SculpturesComponent implements OnInit {

  public productList:any;
  constructor(private api:ApiService,private addtocartService:AddtocartService) { }

  ngOnInit() {
    this.api.sculptures()
    .subscribe(res=>{
      this.productList=res;

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addtocart(item:any){
    this.addtocartService.addtocart(item);

  }

}
