import { Component, OnInit, ViewChild} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})

export class AdminProductsComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) {}

  displayedColumns: string[] = ['title', 'price', 'category', 'button','button2'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  searchKey: string;

  dataSource: MatTableDataSource<any>;

  ngOnInit() {
    this.productService.refreshList().subscribe(list =>{
      let array = list.map(item => {
        return {
          prodID: item.ProductID,
          title: item.Title,
          price: item.Price,
          category: item.Category         
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

  editPro(prodID){
    this.productService.update2(prodID)
    this.router.navigate(['admin/products/' + prodID])
  }

  deletePro(prodId){
    this.productService.deleteProduct(prodId);
    location.reload();
  }

}
