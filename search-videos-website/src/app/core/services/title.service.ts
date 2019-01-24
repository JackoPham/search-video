import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TitleService {
  prefixTitle = 'Aluha Ezcode';
  titleNotTranslate: string;
  constructor(private router: Router, private titleService: Title, private translate: TranslateService) {}

  init() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(async res => {
      const titles = this.getDeepestTitle(this.router.routerState.snapshot.root);
      this.titleNotTranslate = titles;
      const text = await this.getTitleTranslate(titles);
      this.titleService.setTitle(this.prefixTitle + ' - ' + text);
    });
  }

  setTitle(title) {
    this.titleService.setTitle(this.prefixTitle + ' - ' + title);
  }

  async setTitleTranslate() {
    const text = await this.getTitleTranslate(this.titleNotTranslate);
    this.titleService.setTitle(this.prefixTitle + ' - ' + text);
  }

  getTitleTranslate(title) {
    return new Promise((resolve, reject) => {
      this.translate.get(title).subscribe((text: string) => {
        resolve(text);
      });
    });
  }

  get titleTranslate() {
    return this.titleNotTranslate;
  }

  get title() {
    const ti = this.titleService.getTitle();
    if (ti) {
      const title = ti.replace('Aluha Ezcode - ', '');
      return title;
    }
    return this.prefixTitle;
  }

  private getDeepestTitle(routeSnapshot: ActivatedRouteSnapshot) {
    let title = routeSnapshot.data ? routeSnapshot.data.title : '';
    if (routeSnapshot.firstChild) {
      title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }
  ucFirst(value: string) {
    if (!value) {
      return value;
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
