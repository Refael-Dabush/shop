import { Injectable } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ValidatesService } from '../services/validates.service';
import { isNgTemplate, ConditionalExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  userLocalStore;
  constructor(private productS: ProductService, private validateS: ValidatesService) {

    this.userLocalStore = this.validateS.userLogo();
  }

  addToCart( num: number) {
    this.productS.productList().subscribe(list =>{
      const userStore = this.userLocalStore;
      const localCart = this.productS.getData(userStore);
      list.forEach(e =>{
      })
      let array = list.map(item => {
        return {
          title: item.Title,
          price: item.Price,
          category: item.Category,
          imageUrl: item.imageUrl,
          prodId: item.ProductID         
        };
      })
      for ( let i = 0; i < array.length; i++ ) {
        if ( num == array[i].prodId) {
          if ( localCart === null ) {
            const adidToLocalCart = this.productS.productsCart(userStore, array[i]);
            this.productS.setData(userStore, adidToLocalCart);
          } else {
            const localCartNum = this.productS.checkIfInCart(localCart, num);
            if ( localCartNum === 'yes') {
              alert('The Prodact is already in the cart');
            } else {
              const adidToLocalCart = this.productS.productsCart(userStore, array[i]);
              this.productS.setData(userStore, adidToLocalCart);  
            }
          }
        }
      }
      });
  }

  delectFromCart2(productID){
    const localCart = this.productS.getData(this.userLocalStore);
    
    let i = 0;
    localCart.forEach(e => {
      if(localCart[i].prodId == productID){
        this.productS.deleteFromCart3(productID, this.userLocalStore)
        i = i + 1
      }else{
        i = i + 1
      }
      
    });

  }
}


