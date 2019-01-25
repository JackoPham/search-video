import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@ant-design/icons-angular';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { MainBodyComponent } from '../main-body/main-body.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { RouterModule } from '@angular/router';
import { SafePipe } from '../pipe/safe-pipe.pipe';
import { SplitTextPipe } from '../pipe/split-text.pipe';
import { AgmCoreModule } from '@agm/core';
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
    RouterModule,
    NgZorroAntdModule.forRoot(),
    NgBootstrapFormValidationModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ',
    }),
  ],
  declarations: [
    MainHeaderComponent,
    MainBodyComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    SafePipe,
    SplitTextPipe,
  ],
  exports: [
    MainHeaderComponent,
    MainBodyComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    NgZorroAntdModule,
    NgBootstrapFormValidationModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SafePipe,
    SplitTextPipe,
    AgmCoreModule,
  ],
  providers: [
    AuthPermissionService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class ShareModule {}
