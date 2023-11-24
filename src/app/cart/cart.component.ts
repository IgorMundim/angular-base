import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  @Input() public openCart: boolean  = true;
  @Output('close') closeCart = new EventEmitter<boolean>();
  cartDetails = {total: 0, countItems: 0 };
  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartDetails = this.cartService.getDetails()
  }

  handleEscapeAreaClick(){
    this.closeCart.emit(true);
  }


}
