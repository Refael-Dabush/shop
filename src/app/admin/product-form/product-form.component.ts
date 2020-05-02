import { Component, OnInit, Input, Inject,AfterViewInit, ViewChild } from '@angular/core';
import { Categorie } from 'src/app/categorie';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit, AfterViewInit {
  
  productID

  product = {};
  categoriesList: Categorie[] = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Home' },
    { id: 3, name: 'Garden' },
    { id: 4, name: 'Food' }
  ];
  constructor(
    private productService: ProductService,
    private router: Router) {

    this.productID = this.productService.productID;
    this.productService.update2()
    if (this.productID) this.productService.update(this.productID).subscribe(p=> this.product = p)
    }

  save(produ) {

    if(this.productID){
      this.productService.updateProduct(produ);
      this.router.navigate(['admin/products']);
    }else{
      this.productService.postProduct(produ);
      this.router.navigate(['admin/products']);
    }
    
  }


  ngOnInit() {  
  }
  ngAfterViewInit(){
  }
}




