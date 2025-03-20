import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-cart.service',
  imports: [],
  templateUrl: './cart.service.component.html',
  styleUrl: './cart.service.component.css'
})

@Injectable({providedIn: 'root'}) //Provides this service at the root level(Singleton)

export class CartServiceComponent{
  private cart: {id: number; name: string; price: number; quantity: number}[]=[];

  //constructor(private http: HttpClient){} 

  //constructor use for dependency injection from another service to this service
  //if you want to use the service from that component, 
  //you need to inject that service in this component constructor
  //but in this case, we don't need to inject because we aren't using any service for now

  addToCart(item: {id: number; name: string; price: number; quantity: number}){
    const existingItem = this.cart.find ((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    }
    else {
      this.cart.push(item);
    }
  } //close addToCart
  removeFromCart(id: number){
    this.cart = this.cart.filter(item => item.id !==id);
  }
  getCartItem(){
    return this.cart;
  }
  clearCart(){
    this.cart = [];
  }
  getTotalPrice(){
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
} //close export class CartServiceComponent