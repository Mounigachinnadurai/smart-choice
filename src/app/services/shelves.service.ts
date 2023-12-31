import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { cup,cart, order,product } from '../data-type';
import { shelves } from '../shelves';
import { cart, order } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ShelvesService {
  getProducts() {
    throw new Error('Method not implemented.');
  }
  [x: string]: any;

constructor(private http: HttpClient) { }
addProduct(data: shelves) {
  return this.http.post('http://localhost:3000/shelves', data);
}
productList() {
  return this.http.get<shelves[]>('http://localhost:3000/shelves');
}
deleteProduct(id: number) {
  return this.http.delete(`http://localhost:3000/shelves/${id}`);
}
getProduct(id: string) {
  return this.http.get<shelves>(`http://localhost:3000/shelves/${id}`);
}

updateProduct(shelves: shelves) {
  return this.http.put<shelves>(
    `http://localhost:3000/shelves/${shelves.id}`,
    shelves
  );
}
searchProduct(query: string) {
  return this.http.get<shelves[]>(
    `http://localhost:3000/shelves?q=${query}`
  );
}

localAddToCart(data: shelves) {
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
    let items: shelves[] = JSON.parse(cartData);
    items = items.filter((item: shelves) => productId !== item.id);
    localStorage.setItem('localCart', JSON.stringify(items));
    this['cartData'].emit(items);
  }
}

addToCart(cartData: cart) {
  return this.http.post('http://localhost:3000/cart', cartData);
}
getCartList(userId: number) {
  return this.http
    .get<shelves[]>('http://localhost:3000/cart?userId=' + userId, {
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
