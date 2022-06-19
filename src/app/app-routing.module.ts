import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./screens/general/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home/listing',
    pathMatch: 'full'
  },
  {
    path: 'listing',
    loadChildren: () => import('./screens/customer/listing/listing.module').then( m => m.ListingPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./screens/customer/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./screens/customer/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/general/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./screens/general/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'address/:id',
    loadChildren: () => import('./screens/customer/address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'deliveries',
    loadChildren: () => import('./screens/customer/deliveries/deliveries.module').then( m => m.DeliveriesPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./screens/customer/payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'vdash',
    loadChildren: () => import('./screens/vendor/vdash/vdash.module').then( m => m.VdashPageModule)
  },
  {
    path: 'vlist',
    loadChildren: () => import('./screens/vendor/vlist/vlist.module').then( m => m.VlistPageModule)
  },
  {
    path: 'vuploads',
    loadChildren: () => import('./screens/vendor/vuploads/vuploads.module').then( m => m.VuploadsPageModule)
  },
  {
    path: 'vcrud',
    loadChildren: () => import('./screens/vendor/vcrud/vcrud.module').then( m => m.VcrudPageModule)
  },
  {
    path: 'vstats',
    loadChildren: () => import('./screens/vendor/vstats/vstats.module').then( m => m.VstatsPageModule)
  },
  {
    path: 'vdetail',
    loadChildren: () => import('./screens/vendor/vdetail/vdetail.module').then( m => m.VdetailPageModule)
  },
  {
    path: 'vttsold',
    loadChildren: () => import('./screens/vendor/vttsold/vttsold.module').then( m => m.VttsoldPageModule)
  },
  {
    path: 'vttamount',
    loadChildren: () => import('./screens/vendor/vttamount/vttamount.module').then( m => m.VttamountPageModule)
  },
  {
    path: 'outlets',
    loadChildren: () => import('./screens/customer/outlets/outlets.module').then( m => m.OutletsPageModule)
  },
  {
    path: 'order/:id',
    loadChildren: () => import('./screens/customer/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./screens/admin/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'advendor',
    loadChildren: () => import('./screens/admin/advendor/advendor.module').then( m => m.AdvendorPageModule)
  },
  {
    path: 'adcustomer',
    loadChildren: () => import('./screens/admin/adcustomer/adcustomer.module').then( m => m.AdcustomerPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./screens/customer/success/success.module').then( m => m.SuccessPageModule)
  },





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
