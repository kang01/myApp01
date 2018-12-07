import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';
import { NgxGaugeModule } from 'ngx-gauge';
import { KonvaModule } from 'ng2-konva';
import { KonvaImageDirective } from '../services/konva.self.image.directive';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AboutPage }]),
    NgxGaugeModule,
    KonvaModule
  ],
  declarations: [AboutPage,KonvaImageDirective]
})
export class AboutPageModule {}
