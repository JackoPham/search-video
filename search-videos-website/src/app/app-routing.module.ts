import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TitleService } from './core/services/title.service';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { AuthPermissionService } from './services/auth-permission.service';
import { BlankLayoutComponent } from './components/layout/blank-layout/blank-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/error/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    // canActivate: [AuthPermissionService],
    children: [
      {
        path: '',
        component: HomeComponent,
        data: { title: 'menu.dashboard' },
      },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' },
      },
    ],
  },
  {
    path: '**',
    component: BlankLayoutComponent,
    children: [
      {
        path: '**',
        component: NotFoundComponent,
        data: { title: 'err.err404' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(titleService: TitleService) {
    titleService.init();
  }
}
