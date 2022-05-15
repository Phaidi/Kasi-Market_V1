import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'listing',
        loadChildren: () => import('../../customer/listing/listing.module').then( m => m.ListingPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../../customer/cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../../customer/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'wishlist',
        loadChildren: () => import('../../customer/wishlist/wishlist.module').then( m => m.WishlistPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../../general/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: '',
        redirectTo: 'listing',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
