import { Component, Input } from '@angular/core';
import { IProduct } from '../../data/products';
import { CartService } from '../../services/cart.service';
import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',

})
export class ProductItemComponent {
  constructor(private cartService: CartService){}
  
  @Input('item') public product: IProduct = {
    id: '',
    name: '',
    price: 0,
    imageUrl: '',
    quantity: 1
  };
  handleProductClick(){
    this.cartService.addCart({...this.product});
  }
}
