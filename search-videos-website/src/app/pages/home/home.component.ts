import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { YoutubeService } from 'src/app/services/youtube.service';
import SecurityHelper from 'src/helpers/securityHelper';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  validateForm: FormGroup;
  listVideos: any;
  totalPage: number;
  pageToken: 'CDIQAA';
  nextPageToken: '';
  prevPageToken: '';
  constructor(private fb: FormBuilder, private youtubeService: YoutubeService) {}

  ngOnInit() {
    const currentCoordinate = SecurityHelper.getStore('geolocation.aluha.app') || {};
    this.validateForm = this.fb.group({
      latitude: [currentCoordinate.latitude || '10.82642', [Validators.required]],
      longitude: [currentCoordinate.longitude || '106.72268', [Validators.required]],
      locationRadius: ['5km', [Validators.required]],
    });
  }

  search(flg) {
    const params = {
      part: 'snippet',
      videoType: 'any',
      type: 'video',
      location: this.validateForm.value.latitude + ',' + this.validateForm.value.longitude,
      locationRadius: this.validateForm.value.locationRadius,
      order: 'date',
      maxResults: 8,
      pageToken: '',
      nextPageToken: '',
      prevPageToken: '',
    };
    if (flg === 1) {
      params.pageToken = this.nextPageToken;
    } else if (flg === 0) {
      params.pageToken = this.prevPageToken;
    }
    $.showLoading();
    this.youtubeService.searchYoutube(params).then(result => {
      if (result && result.items) {
        this.listVideos = result.items;
        this.totalPage = result.pageInfo.totalResults;
        this.nextPageToken = result.nextPageToken;
        this.prevPageToken = result.prevPageToken;
      } else if (result.error) {
        $.error(result.error.message);
      }
      $.hideLoading();
    });
  }

  changePage(flag) {
    this.search(flag);
  }
}
