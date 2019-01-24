import { Component, OnInit } from '@angular/core';
import WebsiteData from '../../core/data';
import { ThemeService } from 'src/app/core/event-store/theme.event';

@Component({
  selector: 'app-config-theme',
  templateUrl: './config-theme.component.html',
  styles: [],
})
export class ConfigThemeComponent implements OnInit {
  isOpen = false;
  listSolidColor = WebsiteData.colors;
  listText = WebsiteData.colorNames;
  currentTheme: any;
  constructor(private themeService: ThemeService) {
    this.themeService.onChangeTheme.subscribe(result => {
      this.currentTheme = result;
    });
  }

  ngOnInit() {}

  changeColor(color) {
    const setting = { color };
    this.themeService.setHeaderTheme(setting);
  }
  changeTheme(theme) {
    const setting = { theme };
    this.themeService.setHeaderTheme(setting);
  }
  changeMenuTheme(menuTheme) {
    const setting = { menuTheme };
    this.themeService.setHeaderTheme(setting);
  }
  getColor(index) {
    return this.listSolidColor[index];
  }

  onClickedOutside() {
    this.isOpen = false;
  }
}
