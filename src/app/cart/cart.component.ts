import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @Input() public openCart: boolean  = true;
  @Output('close') closeCart = new EventEmitter<boolean>();

  handleEscapeAreaClick(){
    this.closeCart.emit(true);
  }

}
