import { Component, OnInit } from '@angular/core';
import * as screenfull from 'screenfull';
import WebsiteData from '../../core/data';
import { I18nService } from 'src/app/core/services/i18n.service';
import SecurityHelper from 'src/helpers/securityHelper';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/core/event-store/theme.event';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  languages = WebsiteData.languages;
  isFullScreen: boolean;
  theme: string;
  color: string;
  currentFlag: string;
  constructor(private themeService: ThemeService, private i18nService: I18nService, private router: Router) {
    this.themeService.onChangeTheme.subscribe(result => {
      if (result.theme) this.theme = result.theme;
      if (result.color) this.color = result.color;
    });
  }

  ngOnInit() {
    const lang = SecurityHelper.getStore('aluha.ezcode.language');
    if (lang) this.currentFlag = lang.icon;
    else this.currentFlag = 'flag-icon-gb';
  }

  onFullScreen() {
    if (screenfull.enabled && !this.isFullScreen) {
      screenfull.request();
      this.isFullScreen = true;
    } else {
      screenfull.exit();
      this.isFullScreen = false;
    }
  }

  changeLanguage(lang) {
    this.i18nService.setLanguage(lang);
    this.currentFlag = lang.icon;
  }
  logout() {
    SecurityHelper.destroyAuthen();
    this.router.navigate(['/login']);
  }
}
