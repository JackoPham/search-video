import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../core/services/title.service';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styles: [],
})
export class MainHeaderComponent implements OnInit {
  title: string;
  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.title = this.titleService.titleTranslate;
  }
}
