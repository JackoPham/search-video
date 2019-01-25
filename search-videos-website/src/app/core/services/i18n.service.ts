import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import SecurityHelper from '../../../helpers/securityHelper';
import { BehaviorSubject } from 'rxjs';
import { TitleService } from './title.service';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private languageKey = 'aluha.ezcode.language';

  constructor(
    public translate: TranslateService,
    private titleService: TitleService
  ) {
    translate.addLangs(['en', 'vi']);
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // do something
      this.titleService.setTitleTranslate();
    });
  }

  init() {
    const lang = SecurityHelper.getStore(this.languageKey);
    if (!lang) {
      this.translate.use('en');
    } else {
      this.translate.use(lang.value);
    }
  }

  setLanguage(lang: any) {
    SecurityHelper.createStore(this.languageKey, lang);
    this.translate.use(lang.value);
  }
}
