import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { KonvaModule } from 'ng2-konva';
import { ModalModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxGaugeModule } from 'ngx-gauge';
import { EquipmentDetailModalComponent } from './modal/equipment.detail.modal.component';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    KonvaModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    NgbModule,
    NgxGaugeModule
  ],
  declarations: [
    HomePage,
    EquipmentDetailModalComponent
  ],
  entryComponents: [
    EquipmentDetailModalComponent
  ],
  providers: [
    FileOpener
  ]
})
export class HomePageModule {}
