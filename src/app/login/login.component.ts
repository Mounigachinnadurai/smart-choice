import { Component, OnInit,Renderer2 } from '@angular/core';
import { admin,cart, login, product, signUp } from '../data-type';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';
import { AdminService } from '../services/admin.service';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  
  showLogin:boolean=true
  authError:string="";
  isAdmin: boolean = false;
  loginType: string = "user";

  


  constructor(private admin:AdminService,private user: UserService, private product: ProductService) {

  }


  ngOnInit(): void {
    // this.user.userAuthReload();
  }
  signUp(data: signUp) {
    this.user.userSignUp(data);
  }
 
  login(data: any) {
    if (this.loginType === "user") {
      // Call the user service for user login
      this.user.userLogin(data);
    } else {
      // Call the admin service for admin login
      this.admin.adminLogin(data);
    }
  }

  // login(data:login) {
  //   if (this.isAdmin) {
  //     // Call the admin service for login
  //     this.admin.adminLogin(data);
  //   } else {
      // Call the user service for login
      // this.user.userLogin(data);
      // this.user.invalidUserAuth.subscribe((result: any) => {
      //   console.warn(result);
      //   if (result) {
      //     this.authError = "User not found";
      //   } else {
      //     this.localCartToRemoteCart();
      //   }
      // });
  //     this.user.userLogin(data);
  //   }
  // }

    
  //         this.user.userLogin(data);
  //         this.user.invalidUserAuth.subscribe((result: any)=>{
  //           console.warn(result);
  //           if(result){
  //              this.authError="User not found"
  //           }else{
  //             this.localCartToRemoteCart();
  //           }
            
  //         })
        
    
  // }
  openSignUp() {
    this.showLogin = false
  }
  openLogin() {
    this.showLogin = true;
  }

  localCartToRemoteCart() {
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    if (data) {
      let cartDataList: product[] = JSON.parse(data);

      cartDataList.forEach((product: product, index) => {
        let cartData: cart = {
          ...product,
          productId: product.id,
          userId,
          category: ''
        }
        delete cartData.id;
        setTimeout(() => {
          this.product.addToCart(cartData).subscribe((result) => {
            if (result) {
              console.warn("data is stored in DB");
            }
          })
        }, 500);
        if (cartDataList.length === index + 1) {
          localStorage.removeItem('localCart')
        }
      })
    }

    setTimeout(() => {
      this.product.getCartList(userId)
    }, 2000);

  }
}