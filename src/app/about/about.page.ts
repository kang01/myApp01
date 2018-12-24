import { BsModalService ,BsModalRef} from 'ngx-bootstrap/modal';
import { Component, TemplateRef, OnInit } from '@angular/core';
import { Observable, of ,BehaviorSubject} from 'rxjs';
import { KonvaComponent } from 'ng2-konva';
import { EquipmentDetailModalComponent } from '../home/modal/equipment.detail.modal.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { PhotoProviderService } from '../photo-provider.service';
// import { Camera,CameraOptions  } from '@ionic-native/camera';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
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
    currentImage: any;
    modalRef: BsModalRef;
    constructor(
      private modalService: NgbModal,
      private fileOpener: FileOpener,
      private File: FileOpener,
      ) {}
  
    // openModal(template: TemplateRef<any>) {
    //   this.modalRef = this.modalService.open(template);
    // }

    openModalWithComponent() {
      const modalRef = this.modalService.open(EquipmentDetailModalComponent);
      modalRef.componentInstance.name = 'World';
    }
    openWord(){
      this.fileOpener.open('path/to/file.pdf', 'application/pdf')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error opening file', e));
    }
    ngOnInit() {
     
    }
}