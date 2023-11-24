
import { ProductsProps } from "../data/products";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: ProductsProps[] = [];
  private cartDetails = {
    total: 0,
    countItems: 0
  };

  public getCart(){
    return this.cartItems;
  }
  public getDetails(){
    return this.cartDetails;
  }


  public addCart(productsToAdd: ProductsProps){
    const existingCartItems = this.cartItems.find((cartItem) => cartItem.id === productsToAdd.id);
    if (existingCartItems) {
      this.cartItems.map((cartItem: ProductsProps) =>
        cartItem.id === productsToAdd.id ? cartItem.quantity++ : cartItem
      );
    } else {
      this.cartItems.push(productsToAdd);
      this.cartDetails.countItems ++;
    }
    this.cartDetails.total += productsToAdd.price;
  }

  public removeCartItems(cartItemToRemove: ProductsProps, index: number){
    const existingCartItem = this.cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if (existingCartItem?.quantity === 1)
      this.clearCartItem(index);
    else 
      this.cartDetails.total -= cartItemToRemove.price


    this.cartItems.map((cartItem: ProductsProps) =>
      cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity-- } : cartItem
    );

  }

  public clearCartItem (index: number) {
    this.cartDetails.total -= this.cartItems[index].price * this.cartItems[index].quantity;
    this.cartItems.splice(index, 1);
    this.cartDetails.countItems --;
  };

}
