import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ShoppingCartComponent} from './shoping-cart/shoping-cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {LoginComponent} from './login/login.component';
import {AdminProductsComponent} from './admin/admin-products/admin-products.component';
import {AdminOrdersComponent} from './admin-orders/admin-orders.component';
import {MyOrdersComponent} from './my-orders/my-orders.component';
import {AuthGuard} from './auth-guard.service';
import {OrderSuccessComponent} from './order-success/order-success.component';
import {AdminAuthGuard} from './admin-auth-guard.service';
import {ProductFormComponent} from './admin/product-form/product-form.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'shopping-cart', component: ShoppingCartComponent
  },
  // Protected User routes
  {
    path: 'check-out', component: CheckoutComponent, canActivate: [AuthGuard]
  },
  {
    path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard]
  },
  {
    path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard]
  },
    {
    path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]
  },
  // Admin routes
  {
    path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard]
  },
  {
    path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
