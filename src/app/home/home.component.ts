import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { ProductService } from 'src/app/services/product.service';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  constructor(private productService: ProductService, private cartS: CartService) {}

  displayedColumns: string[] = ['title', 'price', 'category', 'imageUrl', 'button'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  searchKey: string;

  dataSource: MatTableDataSource<any>;
  
  ngOnInit(){
    this.productService.refreshList().subscribe(list =>{
      let array = list.map(item => {
        return {
          title: item.Title,
          price: item.Price,
          category: item.Category,
          imageUrl: item.imageUrl,
          prodId: item.ProductID         
        };
      });
      this.dataSource = new MatTableDataSource(array);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }
  applyFilter(){
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  addToCart(pos: number){
    this.cartS.addToCart(pos);
  }

   }
