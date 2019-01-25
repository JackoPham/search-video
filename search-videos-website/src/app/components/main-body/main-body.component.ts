import { Component, OnInit, Input } from '@angular/core';
import { WebsiteEvent } from 'src/app/core/event-store/website.event';

@Component({
  selector: 'main-body',
  templateUrl: './main-body.component.html',
  styles: [],
})
export class MainBodyComponent implements OnInit {
  currentHeight: any;
  scrollStatus: string;
  @Input() isScroll = true;
  constructor(private webSiteEvent: WebsiteEvent) {}

  ngOnInit() {
    this.scrollStatus = this.isScroll ? 'auto' : 'hidden';
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize.bind(this));
  }

  handleWindowResize() {
    let contentHeight = window.innerHeight - 150;
    if (contentHeight <= 0) {
      contentHeight = window.innerHeight;
    }
    this.currentHeight = contentHeight;
    this.webSiteEvent.changeHeight(contentHeight - 30);
  }
}
