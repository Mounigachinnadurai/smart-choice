import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  invalidUserAuth = new EventEmitter<boolean>(false)
  isAdminLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false)
  data: any;


  constructor(private http: HttpClient,private client: HttpClient, private router: Router) { }

  reloadAdmin() {
    if (localStorage.getItem('admin')) {
      this.isAdminLoggedIn.next(true)
      this.router.navigate(['login'])
    }
  }
  userSignUp(user: signUp) {
    this.http.post('http://localhost:3000/users', user, { observe: 'response' })
      .subscribe((result) => {
        if (result) {
          localStorage.setItem('user', JSON.stringify(result.body));
          this.router.navigate(['home']);
        }

      })

  }
  
  userLogin(data: login) {
    this.http.get<signUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
      { observe: 'response' }
    ).subscribe((result) => {
      if (result && result.body?.length) {
        localStorage.setItem('user', JSON.stringify(result.body[0]));
        const isAdmin = result.body[0].isAdmin; // Assuming there's a property 'isAdmin' indicating if the user is an admin or not
        if (isAdmin) {
          // Redirect to the admin component if the user is an admin
          this.router.navigate(['/adminHomeCup']);
        } else {
          // Redirect to the user component if the user is not an admin
          this.router.navigate(['/home']);
        }
        this.invalidUserAuth.emit(false);
      } else {
        this.invalidUserAuth.emit(true);
      }
  });
  }
  // userLogin(data: login) {
  

  //   this.http.get<signUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
  //     { observe: 'response' }
  //   ).subscribe((result) => {
  //     if (result && result.body?.length) {
  //       localStorage.setItem('user', JSON.stringify(result.body[0]));
        
  //       this.router.navigate(['/home']);
  //       this.invalidUserAuth.emit(false)
  //     } else {
  //       this.invalidUserAuth.emit(true)
  //     }
  //   })

  // }

  // userLogin(data: login) {
  //   this.http.get(`http://localhost:3000/admin?email=${data.email}&password=${data.password}`,
  //     { observe: 'response' }).subscribe((result: any) => {
  //       console.warn(result)
  //       if (result && result.body && result.body.length === 1) {
  //         this.isLoginError.emit(false)
  //         localStorage.setItem('admin', JSON.stringify(result.body))
  //         this.router.navigate(['adminHomeShelves'])
  //       } else {
  //         console.warn("login failed");
  //         this.isLoginError.emit(true)
  //       }
  //     })
  // }



  userAuthReload() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['home']);
    }
  }
}
