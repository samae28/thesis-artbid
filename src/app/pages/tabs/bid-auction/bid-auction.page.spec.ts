import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BidAuctionPage } from './bid-auction.page';

describe('BidAuctionPage', () => {
  let component: BidAuctionPage;
  let fixture: ComponentFixture<BidAuctionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BidAuctionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
