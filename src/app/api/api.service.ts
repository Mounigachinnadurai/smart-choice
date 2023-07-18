import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { cart, order,product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
getProducts() {
  throw new Error('Method not implemented.');
}

constructor(public http:HttpClient) { }

getproduct(){
  return this.http.get<any>("http://localhost:3000/details")
  .pipe(map((res:any)=>{
    return res;
  }))
}
getproducts(){
  return this.http.get<any>("http://localhost:3000/wallShelves")
  .pipe(map((res:any)=>{
    return res;
  }))
}
cup(){
  return this.http.get<any>("http://localhost:3000/cup")
  .pipe(map((res:any)=>{
    return res;
  }))
}
deleteProduct(id: number) {
  return this.http.delete<any>(`http://localhost:3000/cup/${id}`);
  
}
mirror(){
  return this.http.get<any>("http://localhost:3000/mirror")
  .pipe(map((res:any)=>{
    return res;
  }))
}
sculptures(){
  return this.http.get<any>("http://localhost:3000/sculptures")
  .pipe(map((res:any)=>{
    return res;
  }))
}
lights(){
  return this.http.get<any>("http://localhost:3000/lights")
  .pipe(map((res:any)=>{
    return res;
  }))
}
clocks(){
  return this.http.get<any>("http://localhost:3000/clocks")
  .pipe(map((res:any)=>{
    return res;
  }))
}

}
