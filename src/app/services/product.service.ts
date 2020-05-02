import { Product } from '../models/product';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ptor } from 'protractor';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  productID: string
  productIDN: number

  //readonly rootURL = "http://localhost:44389/api/Products"
  readonly rootURL = "http://shopeserverside-dev.us-east-2.elasticbeanstalk.com/api/products"
  constructor(private http : HttpClient) { }

  postProduct(formdata : Product){
    const httpOp = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<Product>(this.rootURL + "/InsertProductDetails",formdata,httpOp).subscribe((pro) =>{
      pro.Title;
      pro.Price;
      pro.Category;
      pro.imageUrl;
    })
  }

  refreshList(){
    return this.http.get<any[]>(this.rootURL)
  }

  updateProduct(formdata : Product){
    const httpOp = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put<Product>(this.rootURL + '/UpdateProduct',formdata,httpOp).subscribe((pro)=>{
      pro.ProductID;
      pro.Title;
      pro.Price;
      pro.Category;
      pro.imageUrl;
    })
  }

  deleteProduct(prodoId){
    const httpOp = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.delete<any>(this.rootURL + "/" + prodoId,httpOp).subscribe((pro)=>{
      pro.productID
    })
  }

  productList(){
    return this.http.get<Product[]>(this.rootURL)
  }

setData(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

getData(key: string): any {
  return JSON.parse(localStorage.getItem(key));
}

productsChec(produ) {
  const products = [];
  const productsChec = this.getData('products');
  if (productsChec == null) {
    const produ22 = JSON.stringify(produ);
    const produ33 = JSON.parse(produ22);
    products.push(produ33);
    return products;
  } else {
      productsChec.push(produ);
      return productsChec;
  }
}

productsCart(userName, produ) {
  const products = [];
  const productsChec = this.getData(userName);
  if (productsChec == null) {
    const produ22 = JSON.stringify(produ);
    const produ33 = JSON.parse(produ22);
    products.push(produ33);
    return products;
  } else {
      productsChec.push(produ);
      return productsChec;
  }
}
  getAll() {
    const proD = JSON.parse(localStorage.getItem('products'));
    return proD;
  }


    deleteFromCart3(productId, userLog) {
      const prductTitle = [];
      const prductTitle2 = [];
      const localCart = this.getData(userLog);


      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < localCart.length; i++) {
        prductTitle.push(localCart[i].prodId);
        prductTitle2.push(localCart[i]);
      };

      const index = prductTitle.indexOf(productId);
      prductTitle2.splice(index, 1);
      console.log(index);
      this.setData(userLog, prductTitle2);

    }

    checkIfInCart(cartArray, theNumber) {
      const productName = [];
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < cartArray.length; i++) {
        productName.push(cartArray[i].prodId);
      }
      // tslint:disable-next-line: prefer-for-of
      for ( let i = 0; i < productName.length; i++) {
        if (productName[i] === theNumber) {
          return 'yes';
        }
      }
    }

    chooseCart() {
      const userNameCart = sessionStorage.getItem('loggedUser');
      if ( userNameCart === '' ) {
        return;
      } else {
      const proD = JSON.parse(localStorage.getItem('Hello ' + userNameCart));
      return proD;
    }
    }

    update(prodId){
      return this.http.get<any[]>(this.rootURL + "/GetProductDetailsById/" + prodId)  
    }

    update2(prodId?){
      if(prodId) this.productID = prodId
      else
      this.productID = ""
    }

}
