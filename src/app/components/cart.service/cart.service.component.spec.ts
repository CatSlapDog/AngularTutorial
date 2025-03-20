import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartServiceComponent } from './cart.service.component';

  fdescribe('CartServiceComponent', () => {
    let component: CartServiceComponent;
    //declare variable for receive service dependencies injecting
    //it's the same instance as your component in this describe test
    let fixture: ComponentFixture<CartServiceComponent>;
    

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [CartServiceComponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(CartServiceComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should add item to cart', () => {
      const item = { id: 1, name: 'Test Item', price: 100, quantity: 1 };
      component.addToCart(item);
      expect(component.getCartItem()).toContain(item);
    });

    it('should increase quantity if item already exists in cart', () => {
      const item = { id: 1, name: 'Test Item', price: 100, quantity: 1 };
      component.addToCart(item);
      component.addToCart(item);
      expect(component.getCartItem().find
      (cartItem => cartItem.id === item.id)?.quantity).toBe(2);
    });

    it('should remove item from cart', () => {
      const item = { id: 1, name: 'Test Item', price: 100, quantity: 1 };
      component.addToCart(item);
      component.removeFromCart(item.id);
      expect(component.getCartItem()).not.toContain(item);
    });

    it('should clear the cart', () => {
      const item = { id: 1, name: 'Test Item', price: 100, quantity: 1 };
      component.addToCart(item);
      component.clearCart();
      expect(component.getCartItem().length).toBe(0);
    });

    it('should calculate total price', () => {
      const item1 = { id: 1, name: 'Test Item 1', price: 100, quantity: 1 };
      const item2 = { id: 2, name: 'Test Item 2', price: 200, quantity: 2 };
      component.addToCart(item1);
      component.addToCart(item2);
      expect(component.getTotalPrice()).toBe(500);
    });
  }); //close describe