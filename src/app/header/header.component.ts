import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public cartIsOpen: boolean = false;

  openCart(){
    this.cartIsOpen = true;
  }

  closeCart(){
    this.cartIsOpen = false;
  }
}
