import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit{
  public cartIsOpen: boolean = false;
  public cartDetails = { total: 0, countItems: 0 };
  
  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartDetails = this.cartService.getDetails();
  }
  openCart(){
    this.cartIsOpen = true;
  }

  closeCart(){
    this.cartIsOpen = false;
  }
}
