import { Component, OnInit } from '@angular/core';
// import { AddtocartService } from '../api/addtocart.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
// import { product } from '../data-type';
// import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  [x: string]: any;
  // [x: string]: any;
  menuType: String = 'default';
  // adminName: string = "";
  // userName: string = "";
  // searchResult: undefined | product[];
  // cartItems = 0;
  // public totalItem: number = 0;
  constructor(private viewportScoller: ViewportScroller, private router: Router) { }
  todecor() {
    this.viewportScoller.scrollToAnchor("decor");
  }

  ngOnInit(): void {
    this['route'].events.subscribe((val:any)=>{
      if(val.url){
        console.warn(val.url)
        if(localStorage.getItem('admin') && val.url.includes('admin')){
          console.warn("in admin area")
          this.menuType="admin"
        }else{
          console.warn("outside admin")
          this.menuType='default'
        }


      }
    })
    
   
  }
  
  
  }


