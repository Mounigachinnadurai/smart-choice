import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private client:HttpClient) { }
addUserInformation(body:any){

  return this.client.post("http://localhost:3000/signupUsers",body);


}
}
