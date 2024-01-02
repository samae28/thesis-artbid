import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedSegment: string = 'medium';

  segmentChanged() {
    // Handle segment change if needed
    console.log('Selected Segment:', this.selectedSegment);
  }
}

