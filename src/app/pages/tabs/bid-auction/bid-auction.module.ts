import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidAuctionPageRoutingModule } from './bid-auction-routing.module';

import { BidAuctionPage } from './bid-auction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidAuctionPageRoutingModule
  ],
  declarations: [BidAuctionPage]
})
export class BidAuctionPageModule {}
