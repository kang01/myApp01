import { BsModalService ,BsModalRef} from 'ngx-bootstrap/modal';
import { Component, TemplateRef, OnInit } from '@angular/core';
import { Observable, of ,BehaviorSubject} from 'rxjs';
import { KonvaComponent } from 'ng2-konva';
import { EquipmentDetailModalComponent } from '../home/modal/equipment.detail.modal.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare const Konva: any;
let ng: any;
@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
    gaugeType = "full";
    gaugeValue = 36;
    gaugeLabel = "Speed";
    gaugeAppendText = "%";

    modalRef: BsModalRef;
    constructor(private modalService: NgbModal) {}
  
    // openModal(template: TemplateRef<any>) {
    //   this.modalRef = this.modalService.open(template);
    // }

    openModalWithComponent() {
      const modalRef = this.modalService.open(EquipmentDetailModalComponent);
      modalRef.componentInstance.name = 'World';
  }
    ngOnInit() {
     
    }
}