import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@ant-design/icons-angular';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { MainBodyComponent } from '../main-body/main-body.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ModalHeaderComponent } from '../modal/modal-header.component';
import { ModalBodyComponent } from '../modal/modal-body.component';
import { ModalFooterComponent } from '../modal/modal-footer.component';
import { AuthPermissionService } from 'src/app/services/auth-permission.service';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    NgZorroAntdModule.forRoot(),
    NgBootstrapFormValidationModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [MainHeaderComponent, MainBodyComponent, ModalHeaderComponent, ModalBodyComponent, ModalFooterComponent],
  exports: [
    MainHeaderComponent,
    MainBodyComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    NgZorroAntdModule,
    NgBootstrapFormValidationModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
  ],
  providers: [
    AuthPermissionService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ShareModule };
  }
}
