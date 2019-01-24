import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import SecurityHelper from 'src/helpers/securityHelper';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private storeKey = 'header.theme';
  private currentTheme: ThemeSetting;
  private sourceChangeHeaderTheme: any;
  onChangeTheme: any;
  private setting: ThemeSetting;

  constructor() {
    this.currentTheme = SecurityHelper.getStore(this.storeKey);
    if (!this.currentTheme) {
      this.currentTheme.color = 'bg-primary';
      this.currentTheme.theme = 'navbar-dark';
      this.currentTheme.menuTheme = 'menu-light';
    }
    this.sourceChangeHeaderTheme = new BehaviorSubject<ThemeSetting>(
      this.currentTheme
    );
    this.onChangeTheme = this.sourceChangeHeaderTheme.asObservable();
  }

  setHeaderTheme(setting: any) {
    const setObj = SecurityHelper.getStore(this.storeKey);
    const storeObj = { ...setObj, ...setting };
    SecurityHelper.createStore(this.storeKey, storeObj);
    this.sourceChangeHeaderTheme.next(storeObj);
  }
}

class ThemeSetting {
  theme: string;
  color: string;
  menuTheme: string;
}
