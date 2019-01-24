import { Injectable } from '@angular/core';
import { Constants } from 'src/config/constants';
import { HttpClientService } from '../core/services/http-client';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  hostUrl = Constants.HOST_API + '/api/user/';
  constructor(private httpClient: HttpClientService) {}

  login(data) {
    const url = this.hostUrl + 'login';
    return this.httpClient.postSync(url, data);
  }
}
