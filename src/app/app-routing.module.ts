import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'shopping-cart', component: ShoppingCartComponent },
  {path: 'check-out', component: CheckOutComponent },
  {path: 'order-success', component: OrderSuccessComponent },
  {path: 'login', component: LoginComponent },
  {path: 'admin/products/new', component: ProductFormComponent},
  {path: 'admin/products/:id', component: ProductFormComponent },
  {path: 'admin/products', component: AdminProductsComponent },
  {path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {
}
