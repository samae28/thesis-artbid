import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BidAuctionPage } from './bid-auction.page';

const routes: Routes = [
  {
    path: '',
    component: BidAuctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidAuctionPageRoutingModule {}
