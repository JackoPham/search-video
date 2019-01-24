import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ClickOutsideModule } from 'ng4-click-outside';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ConfigThemeComponent } from './components/config-theme/config-theme.component';
import { HomeComponent } from './pages/home/home.component';
import { TitleService } from './core/services/title.service';
import { SafePipe } from './components/pipe/safe-pipe.pipe';
import { SplitTextPipe } from './components/pipe/split-text.pipe';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { BlankLayoutComponent } from './components/layout/blank-layout/blank-layout.component';
import { NotFoundComponent } from './pages/error/not-found.component';
import { LoginModule } from './pages/login/login.module';
import { ShareModule } from './components/share/share.module';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    BlankLayoutComponent,
    NavbarComponent,
    HeaderComponent,
    ConfigThemeComponent,
    NotFoundComponent,
    HomeComponent,
    SafePipe,
    SplitTextPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClickOutsideModule,
    ShareModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgProgressModule.withConfig({
      spinnerPosition: 'left',
      color: '#f71cff',
      thick: true,
    }),
    NgProgressHttpModule,
    LoginModule,
  ],
  providers: [TitleService],
  bootstrap: [AppComponent],
})
export class AppModule {
  ngDoBootstrap(moduleRef) {
    // AppInjector.setInjector(moduleRef.injector);
  }
}
