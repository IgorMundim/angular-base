import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../data/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent  implements OnInit{
  public products: Array<IProduct> = [];
  
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
