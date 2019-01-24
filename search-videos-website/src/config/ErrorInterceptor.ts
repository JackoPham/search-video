import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import SecurityHelper from 'src/helpers/securityHelper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { AuthenToken } from './authen-token';
// import SecurityHelper from './securityHelper';

declare var $: any;

/* xử lý khi request tới api nếu status ko đúng. vì dụ check token */
@Injectable()
export class InterceptService implements HttpInterceptor {
  constructor(private router: Router, private modal: NgbModal) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    // // Clone the request and replace the original headers with
    // // cloned headers, updated with the authorization.
    const authReq = request.clone();
    return next.handle(authReq).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            if (event && event.body) {
              if (event.body.status === 401) {
                this.router.navigate(['/login']);
              }
            }
          }
        },
        error => {
          // debugger;
          if (error && error.status === 401) {
            this.modal.dismissAll();
            SecurityHelper.destroyAuthen();
            this.router.navigate(['/login']);
          }
          $.hideLoading();
        }
      )
    );
  }
}
