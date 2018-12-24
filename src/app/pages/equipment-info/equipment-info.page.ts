import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-equipment-info',
  templateUrl: './equipment-info.page.html',
  styleUrls: ['./equipment-info.page.scss'],
})
export class EquipmentInfoPage implements OnInit {
  @Input() value: number;
  constructor(navParams: NavParams) { }

  ngOnInit() {
  }

}
