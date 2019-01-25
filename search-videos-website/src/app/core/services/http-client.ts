import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import SecurityHelper from '../../../helpers/securityHelper';
declare var $: any;
@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}
  handleError(err: any) {
    if (err.error) {
      if (err.status === 401) {
        $.error('Your session timeout');
        // const history = Store.getHistory();
        // SecurityHelper.destroyAuthen();
        // history.push('/login');
      } else if (err.status === 403) {
        $.error('Please make sure you have right access');
      }
    }
    $.hideLoading();
    return err;
  }
  getHeader(param?: any, isSetToken = true) {
    let headers = new HttpHeaders();
    const authToken = SecurityHelper.getStoreAuthen();
    let params = new HttpParams();
    if (authToken && authToken.token && isSetToken) {
      headers = headers.append('Authorization', authToken.token || '');
      headers = headers.append('userId', authToken.user ? authToken.user.id : 0);
    }
    if (param) {
      const listKeys = Object.keys(param).map(key => {
        return { name: key, value: param[key] };
      });
      listKeys.forEach(item => {
        params = params.append(item.name, item.value);
      });
    }
    const httpOptions = { headers, params };
    return httpOptions;
  }

  setUserInfo(data) {
    if (data) {
      const authToken = SecurityHelper.getStoreAuthen();
      if (authToken && authToken.user) {
        data.userid = authToken.user.id;
      }
    }
  }

  getSync(url: any, params?: any): Promise<any | undefined> {
    return new Promise((resolve, reject) => {
      this.http.get(url, this.getHeader(params)).subscribe(
        res => {
          resolve(res);
        },
        error => {
          reject(this.handleError(error));
        }
      );
    });
  }
  deleteSync(url: any, params?: any): Promise<any | undefined> {
    return new Promise((resolve, reject) => {
      this.http.delete(url, this.getHeader(params)).subscribe(
        res => {
          resolve(res);
        },
        error => {
          reject(this.handleError(error));
        }
      );
    });
  }
  postSync(url: string, params: any = {}): Promise<any | undefined> {
    this.setUserInfo(params);
    return new Promise((resolve, reject) => {
      this.http.post(url, params, this.getHeader()).subscribe(
        res => {
          resolve(res);
        },
        error => {
          reject(this.handleError(error));
        }
      );
    });
  }
  async putSync(url: string, params: any): Promise<any | undefined> {
    this.setUserInfo(params);
    return new Promise(resolve => {
      this.http.put(url, params, this.getHeader()).subscribe(
        res => {
          resolve(res);
        },
        error => {
          resolve(this.handleError(error));
        }
      );
    });
  }

  get(url: any, params?: any) {
    return this.http.get(url, this.getHeader(params));
  }
  delete(url: any, params?: any) {
    return this.http.delete(url, this.getHeader(params));
  }
  post(url: string, params: any) {
    this.setUserInfo(params);
    return this.http.post(url, params, this.getHeader());
  }
  put(url: string, params: any) {
    this.setUserInfo(params);
    return this.http.put(url, params, this.getHeader());
  }

  getExternal(url: any, params?: any) {
    return this.http.get(url, this.getHeader(params, false));
  }
  deleteExternal(url: any, params?: any) {
    return this.http.delete(url, this.getHeader(params, false));
  }
  postExternal(url: string, params: any) {
    return this.http.post(url, params, this.getHeader(null, false));
  }
  putExternal(url: string, params: any) {
    return this.http.post(url, params, this.getHeader(null, false));
  }
}
