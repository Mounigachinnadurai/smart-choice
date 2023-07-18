import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product,cup } from '../data-type';
import { ProductService } from '../services/product.service';
import { ShelvesService } from '../services/shelves.service';
import { LightService } from '../services/light.service';
@Component({
  selector: 'app-new-header',
  templateUrl: './new-header.component.html',
  styleUrls: ['./new-header.component.css']
})
export class NewHeaderComponent implements OnInit {
  [x: string]: any;
  menuType: string = 'default';
  adminName:string="";
  userName:string="";
  searchResult:undefined|product[];
  cartItems=0;

  constructor(private route:Router,private product:ProductService) { }

  ngOnInit() :void{
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('admin') && val.url.includes('admin')) {
         let adminStore=localStorage.getItem('admin');
         let adminData =adminStore && JSON.parse(adminStore)[0];
         this.adminName=adminData.name;
          this.menuType = 'admin';
        }
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName= userData.name;
          this.menuType='user';
          this.product.getCartList(userData.id);
          // this['shelves'].getCartList(userData.id);
        }
         else {
          this.menuType = 'default';
        }
      }
    });
    let cartData= localStorage.getItem('localCart');
    if(cartData){
      this.cartItems= JSON.parse(cartData).length
    }
    this.product['cartData'].subscribe((items: string | any[])=>{
      this.cartItems= items.length
    })
  }
  logout(){
    localStorage.removeItem('admin');
    this.route.navigate(['home'])
  }

  userLogout(){
    localStorage.removeItem('user');
    this.route.navigate(['/login'])
    this.product['cartData'].emit([])
  }

  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result:any)=>{
       
        if(result.length>5){
          result.length=length
        }
        this.searchResult=result;
      })
    }
  }
  hideSearch(){
    this.searchResult=undefined
  }
  redirectToDetails(id:number){
    this.route.navigate(['/details/'+id])
  }
  submitSearch(val:string){
    console.warn(val)
  this.route.navigate([`search/${val}`]);
  }
}
    
 