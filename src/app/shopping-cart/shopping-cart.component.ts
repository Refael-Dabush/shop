import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import {PeriodicElementInCart} from '../interfaces/Prodacts';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { toString } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private productService: ProductService, private cartS: CartService) {
    
  }
  displayedColumns: string[] = [ 'imageUrl', 'title', 'price', 'Quantity', "total", 'button'];
  dataLocal: PeriodicElementInCart[] = this.productService.chooseCart();

  dataSource = new MatTableDataSource<PeriodicElementInCart>(this.dataLocal);
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  
    var total1 = 0;
    for (let i = 0; i < this.dataLocal.length; i++) {
      const objPrice = this.dataLocal[i].price
      total1 += objPrice
    }
    var test = total1;
    document.getElementById("tt").innerHTML = test.toString();
     
  }

  delectFromCart(productID){
    this.cartS.delectFromCart2(productID);
    alert("the product is deleted from the cart")
    location.reload();
    
  }

}
