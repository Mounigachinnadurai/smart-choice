import { EventEmitter,Injectable } from '@angular/core';
import { cart, order,product } from '../data-type';
import { lights } from '../light';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LightService {
  cartData = new EventEmitter<product[] | []>();
// [x: string]: any;
constructor(private http: HttpClient) { }
addProduct(data: lights) {
    return this.http.post('http://localhost:3000/light', data);
  }
  productList() {
    return this.http.get<lights[]>('http://localhost:3000/light');
  }
  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/light/${id}`);
  }
  getProduct(id: string) {
    return this.http.get<product>(`http://localhost:3000/light/${id}`);
  }

  updateProduct(product:any) {
    return this.http.put<product>(
      `http://localhost:3000/light/${product.id}`,
      product
    );
  }
  searchProduct(query: string) {
    return this.http.get<product[]>(
      `http://localhost:3000/light?q=${query}`
    );
  }

  localAddToCart(data: any) {
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
      let items: product[] = JSON.parse(cartData);
      items = items.filter((item: product) => productId !== item.id);
      localStorage.setItem('localCart', JSON.stringify(items));
      this['cartData'].emit(items);
    }
  }

  addToCart(cartData: cart) {
    return this.http.post('http://localhost:3000/cart', cartData);
  }
  getCartList(userId: number) {
    return this.http
      .get<product[]>('http://localhost:3000/cart?userId=' + userId, {
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
