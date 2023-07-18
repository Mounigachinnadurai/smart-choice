import { EventEmitter,Injectable } from '@angular/core';
import { clock } from '../clock';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { cart, order,product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  cartData = new EventEmitter<product[] | []>();

  constructor(private http: HttpClient) { }
  addProduct(data: clock) {
    return this.http.post('http://localhost:3000/clocks', data);
  }
  productList() {
    return this.http.get<clock[]>('http://localhost:3000/clocks');
  }
  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/clocks/${id}`);
  }

  getProduct(id: string) {
    return this.http.get<clock>(`http://localhost:3000/clocks/${id}`);
  }

  updateProduct(clock: clock) {
    return this.http.put<clock>(
      `http://localhost:3000/cup/${clock.id}`,
      clock
    );
  }
 

  searchProduct(query: string) {
    return this.http.get<clock[]>(
      `http://localhost:3000/clocks?q=${query}`
    );
  }

  localAddToCart(data: clock) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
      this['cartData'].emit([data]);
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
      this['cartData'].emit(cartData);
    }
  }

  removeItemFromCart(productId: number) {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: clock[] = JSON.parse(cartData);
      items = items.filter((item: clock) => productId !== item.id);
      localStorage.setItem('localCart', JSON.stringify(items));
      this['cartData'].emit(items);
    }
  }

  addToCart(cartData: cart) {
    return this.http.post('http://localhost:3000/cart', cartData);
  }
  getCartList(userId: number) {
    return this.http
      .get<clock[]>('http://localhost:3000/cart?userId=' + userId, {
        observe: 'response',
      })
      .subscribe((result) => {
        if (result && result.body) {
          this['cartData'].emit(result.body);
        }
      });
  }
  removeToCart(cartId: number) {
    return this.http.delete('http://localhost:3000/cart/' + cartId);
  }
  currentCart() {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<cart[]>('http://localhost:3000/cart?userId=' + userData.id);
  }

  orderNow(data: order) {
    return this.http.post('http://localhost:3000/orders', data);
  }
  orderList() {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<order[]>('http://localhost:3000/orders?userId=' + userData.id);
  }

  deleteCartItems(cartId: number) {
    return this.http.delete('http://localhost:3000/cart/' + cartId).subscribe((result) => {
      this['cartData'].emit([]);
    })
  }

  cancelOrder(orderId:number){
    return this.http.delete('http://localhost:3000/orders/'+orderId)

  }

}
