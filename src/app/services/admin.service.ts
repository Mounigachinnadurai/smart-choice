import { EventEmitter,Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isAdminLoggedIn= new BehaviorSubject<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false)


constructor(private http:HttpClient, private router:Router) { }

reloadAdmin(){
  if(localStorage.getItem('admin')){
    this.isAdminLoggedIn.next(true)
    this.router.navigate(['login'])
  }
}
adminLogin(data:login){
 this.http.get(`http://localhost:3000/admin?email=${data.email}&password=${data.password}`,
 {observe:'response'}).subscribe((result:any)=>{
  console.warn(result)
  if(result && result.body && result.body.length===1){
    this.isLoginError.emit(false)
    localStorage.setItem('admin',JSON.stringify(result.body))
    this.router.navigate(['/adminHomeCup']);
  }else{
    console.warn("login failed");
    this.isLoginError.emit(true)
  }
 })
}
}

