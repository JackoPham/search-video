import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { YoutubeService } from 'src/app/services/youtube.service';
import SecurityHelper from 'src/helpers/securityHelper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GooglemapsComponent } from 'src/app/components/home/googlemaps.component';
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
  lat: number;
  lng: number;
  constructor(private fb: FormBuilder, private youtubeService: YoutubeService, private modalService: NgbModal) {}

  ngOnInit() {
    const currentCoordinate = SecurityHelper.getStore('geolocation.aluha.app') || {};
    this.lat = currentCoordinate.latitude || '10.82642';
    this.lng = currentCoordinate.longitude || '106.72268';
    this.validateForm = this.fb.group({
      latitude: [this.lat, [Validators.required]],
      longitude: [this.lng, [Validators.required]],
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

  openMaps() {
    const modelRef = this.modalService.open(GooglemapsComponent, {
      backdrop: 'static',
      windowClass: 'aluha-modal modal-80 animated bounceIn',
    });
    modelRef.componentInstance.lat = this.lat;
    modelRef.componentInstance.lng = this.lng;
    modelRef.result.then(res => {
      if (res) {
        this.lat = res.lat;
        this.lng = res.lng;
        this.validateForm.setValue({ latitude: this.lat, longitude: this.lng, locationRadius: '5km' });
      }
    });
  }
}
