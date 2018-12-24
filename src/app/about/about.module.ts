import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';
import { NgxGaugeModule } from 'ngx-gauge';
import { KonvaModule } from 'ng2-konva';
import { KonvaImageDirective } from '../services/konva.self.image.directive';
import { ModalModule } from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { Camera } from '@ionic-native/camera';
// import { EquipmentDetailModalComponent } from '../home/modal/equipment.detail.modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AboutPage }]),
    NgxGaugeModule,
    KonvaModule,
    ModalModule,
    NgbModule
  ],
  declarations: [AboutPage,KonvaImageDirective],
  entryComponents: [
    
  ],
  providers:[
    // Camera
  ]
})
export class AboutPageModule {}
