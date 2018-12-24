import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EquipmentInfoPage } from '../pages/equipment-info/equipment-info.page';
declare const Konva: any;
declare const gifler: any;
@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  constructor(public modalController: ModalController) {}
  openModal(){
    this.presentModal();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: EquipmentInfoPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
  ngOnInit(){
    // var width = window.innerWidth;
    // var height = window.innerHeight;

    // var stage = new Konva.Stage({
    //     container: 'container1',
    //     width: width,
    //     height: height
    // });

    // var layer = new Konva.Layer();
    // stage.add(layer);


    // var canvas = document.createElement('canvas');
    // function onDrawFrame(ctx, frame) {
    //     canvas.width = frame.width;
    //     canvas.height = frame.height;
    //     ctx.drawImage(frame.buffer, 0, 0);
    //     layer.draw();
    // }

    // new gifler('/assets/images/1123.gif')
    //     .frames(canvas, onDrawFrame);

    // var image = new Konva.Image({
    //     image: canvas
    // });
    // layer.add(image);

  }
}
