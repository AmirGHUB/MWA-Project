import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignUpComponent } from './components/signup/signup.component';
import { ViewPendingSellersComponent } from './components/admin/view-pending-sellers/view-pending-sellers.component';
import { ViewPendingReviewsComponent } from './components/admin/view-pending-reviews/view-pending-reviews.component';
import { SellerComponent } from './components/seller/seller.component';
import { ManageProductsComponent } from './components/seller/manage-products/manage-products.component';
import { LoginComponent } from './components/login/login.component';
import { ViewProductsComponent } from './components/view-products/view-products.component'


const routes: Routes = [
  {path:'',
  component: AppComponent ,
  children:[
    {
      path: '',
       redirectTo:'product',
      pathMatch:'full'
    },
    {
      path: 'product',
      component:ProductListComponent,
   
    },

    {
      path: 'signup',
      component: SignUpComponent
    },

    {
      path : 'viewProduct',
      component : ViewProductsComponent

    },

    {
      path: 'admin',
      component: AdminComponent
    },
    {
      path: 'admin/view-pending-sellers',
      component: ViewPendingSellersComponent
    },

    {
      path: 'login',
      component: LoginComponent
    },

    {
      path: 'admin/view-pending-reviews',
      component: ViewPendingReviewsComponent
    },
    {
      path: 'seller',
      component: SellerComponent
    },
    {
      path: 'seller/manage-products',
      component: ManageProductsComponent
    },
    
    
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
