import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
// import { DataTableModule } from 'angular-4-data-table/src/index';
import { DataTableModule } from 'angular7-data-table';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductService } from './services/product.service';
import { ValidatesService } from './services/validates.service';
import {HttpClientModule} from "@angular/common/http";
import { ProductFormComponent } from 'src/app/admin/product-form/product-form.component'



@NgModule({
  declarations: [
    AppComponent,
    // MatTableModule,
    // MatPaginatorModule,
    BsNavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    AdminProductsComponent,
    LoginComponent,
    RegisterComponent,
    ProductFormComponent
  ],
  imports: [
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    DataTableModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CustomFormsModule,
    HttpClientModule,
   
  ],
  providers: [
    ValidatesService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
