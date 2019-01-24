import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import SecurityHelper from 'src/helpers/securityHelper';
import { Constants } from 'src/config/constants';
import DateHelper from 'src/helpers/dateHelper';

@Injectable()
export class AuthPermissionService implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url?: string): boolean {
    const authToken = SecurityHelper.getStoreAuthen();
    if (authToken && authToken.token) {
      return true;
    } else {
      SecurityHelper.destroyAuthen();
      this.router.navigate(['/login']);
    }
    // Store the attempted URL for redirecting
    Constants.returnUrl = url ? url : '/';

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
