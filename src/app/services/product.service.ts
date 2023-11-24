import { Injectable } from "@angular/core";
import products from "../data/products";

@Injectable({
  providedIn: 'root'
})

export class ProductService{
  private products = products;
  constructor(){}

  public getProducts(){
    return this.products.slice();
  }

}
