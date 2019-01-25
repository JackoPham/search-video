import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-header',
  templateUrl: './modal-header.component.html',
  styles: [],
})
export class ModalHeaderComponent implements OnInit {
  constructor() {}
  @Input() title: string;
  @Input() activeModal: NgbActiveModal;
  ngOnInit() {}
}
