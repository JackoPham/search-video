import { Injectable } from '@angular/core';
import { HttpClientService } from '../core/services/http-client';
import { Constants } from 'src/config/constants';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  hostUrl = Constants.HOST_API + '/api/system/';
  constructor(private httpClient: HttpClientService) {}

  searchYoutube(params) {
    const url = this.hostUrl + 'search';
    return this.httpClient.postSync(url, params);
  }
}
