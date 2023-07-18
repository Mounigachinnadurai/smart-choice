import { Component, OnInit } from '@angular/core';
import { signUp } from '../data-type';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  showLogin=false;
  authError:String='';

  constructor(private admin: AdminService) { }

  ngOnInit() {
    this.admin.reloadAdmin()
  }
  signUp(data: signUp): void {
    console.warn(data);
    this.admin.userSignUp(data);
  }
  login(data: signUp): void {
    this.admin.userLogin(data);
    this.admin.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct";
      }
    })
  }
  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }

}
