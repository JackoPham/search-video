import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/event-store/theme.event';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  currentTheme: any;
  constructor(private themeService: ThemeService) {
    this.themeService.onChangeTheme.subscribe(result => {
      this.currentTheme = result;
    });
  }

  ngOnInit() {}
}
