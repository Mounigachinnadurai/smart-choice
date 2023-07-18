import { Component, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl,FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../confirm.validator';
import { UserService } from '../api/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  repeatPass: string = 'none';

  username: any = '';
  email: any = '';
  password: any = '';
  confirmpass: any = '';

  public loginForm1!: FormGroup;
  someServiceWorkingWithDatabase: any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(document.body, 'background-color', '#e55472');
  }

   ngOnInit() {
    this.loginForm1 = this.fb.group
      ({
        username: ["", [Validators.required,Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{7,15}$/)]],
        email: ["", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password: ["", [Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)]],
        confirmpass: ["", [Validators.required]]
      }, { validator: ConfirmedValidator('password', 'confirmpass') })
  }

//   submitForm() {
//     this.http
//       .post<any>('http://localhost:3000/signupUsers', this.loginForm1.value)
//       .subscribe(
//         (res) => {
//           alert('Registered successfully !!');
//           this.loginForm1.reset();
//           this.router.navigate(['/login']);
//         },
//         (err) => {
//           alert(['something went wrong !!']);
//         }
//       );
//   }
// }

submitForm() {
  this.http.get<any>('http://localhost:3000/signupUsers').subscribe(res => {
    const user = res.find((result: any) => {
      return result.email === this.loginForm1.value.email;
    });

    if (user) {
      alert("Email Already Exists");
    }

    else {
      this.http.post<any>("http://localhost:3000/signupUsers", this.loginForm1.value)
        .subscribe((data) => {
          alert("Registration Successful!");
          this.router.navigate(['/Login']);
        });
      }
   });
}
}
