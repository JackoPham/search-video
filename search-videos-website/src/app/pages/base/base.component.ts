import { OnInit, Component } from '@angular/core';
import { TitleService } from 'src/app/core/services/title.service';

@Component({
  selector: 'app-employee',
  template: '',
})
export class BaseComponent implements OnInit {
  public caption: string;
  // protected utilitiesService: UtilitiesService;
  constructor(protected titleService: TitleService) {
    // const injector = AppInjector.getInjector();
    // this.utilitiesService = injector.get(UtilitiesService);
  }

  ngOnInit() {
    this.caption = this.titleService.title;
  }
}
