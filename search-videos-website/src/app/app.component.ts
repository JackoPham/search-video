import { Component, OnInit } from '@angular/core';
import { I18nService } from './core/services/i18n.service';
import SecurityHelper from 'src/helpers/securityHelper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'aluha-ezcode-management-fe';
  constructor(public i18nService: I18nService) {
    this.i18nService.init();
  }
  ngOnInit(): void {
    this.getGeolocation();
  }
  getGeolocation() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
        const geolocation: Coordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        SecurityHelper.createStore('geolocation.aluha.app', geolocation);
      });
    }
  }
}
export interface Coordinates {
  latitude: number;
  longitude: number;
}
