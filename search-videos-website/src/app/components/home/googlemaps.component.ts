import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styles: [],
})
export class GooglemapsComponent implements OnInit {
  lat: number;
  lng: number;
  title: string;
  modal: any;
  constructor(private modalActive: NgbActiveModal) {
    this.modal = this.modalActive;
  }

  ngOnInit() {}
  placeMarker($event) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
  }
  accept() {
    this.modalActive.close({ lat: this.lat, lng: this.lng });
  }
}
