import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-equipment.detail.modal',
  templateUrl: './equipment.detail.modal.component.html',
  styleUrls: ['./equipment.detail.modal.component.css']
})
export class EquipmentDetailModalComponent implements OnInit {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    console.log(name);
  }

}
