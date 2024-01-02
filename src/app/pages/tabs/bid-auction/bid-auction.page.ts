import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bid-auction',
  templateUrl: './bid-auction.page.html',
  styleUrls: ['./bid-auction.page.scss'],
})
export class BidAuctionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedSegment: string = 'current';

  segmentChanged() {
    // Handle segment change if needed
    console.log('Selected Segment:', this.selectedSegment);
  }
}
