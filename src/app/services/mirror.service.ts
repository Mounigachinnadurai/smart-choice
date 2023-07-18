import { EventEmitter,Injectable } from '@angular/core';
import { cart, order,product } from '../data-type';
import { mirror } from '../mirror';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MirrorService {
  cartData = new EventEmitter<product[] | []>();

constructor(private http: HttpClient) { }
addProduct(data: mirror) {
  return this.http.post('http://localhost:3000/mirror', data);
}
productList() {
  return this.http.get<mirror[]>('http://localhost:3000/mirror');
}
deleteProduct(id: number) {
  return this.http.delete(`http://localhost:3000/mirror/${id}`);
}
getProduct(id: string) {
  return this.http.get<product>(`http://localhost:3000/mirror/${id}`);
}

updateProduct(product:any) {
  return this.http.put<product>(
    `http://localhost:3000/mirror/${product.id}`,
    product
  );
}
searchProduct(query: string) {
  return this.http.get<product[]>(
    `http://localhost:3000/mirror?q=${query}`
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
    let items: mirror[] = JSON.parse(cartData);
    items = items.filter((item: mirror) => productId !== item.id);
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
