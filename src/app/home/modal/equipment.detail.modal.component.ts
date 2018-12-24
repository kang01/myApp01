import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-equipment.detail.modal',
  templateUrl: './equipment.detail.modal.component.html',
  styleUrls: ['./equipment.detail.modal.component.css']
})
export class EquipmentDetailModalComponent implements OnInit {
  @Input() value;
  constructor(private modalController: ModalController) {}

  ngOnInit() {
    console.log(this.value);
  }

}
