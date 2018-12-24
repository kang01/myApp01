import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.page.html',
  styleUrls: ['./monitoring.page.scss'],
})
export class MonitoringPage implements OnInit {

  public types = [
    { val: '1',label:'超温报警', isChecked: true },
    { val: '2',label:'液氮安全', isChecked: false },
    { val: '3',label:'消防报警', isChecked: false },
    { val: '4',label:'氧浓度报警', isChecked: false },
    { val: '5',label:'红外报警', isChecked: false },
    { val: '6',label:'供电报警', isChecked: false },
    { val: '7',label:'探头故障', isChecked: false },
    { val: '8',label:'探头失联', isChecked: false },
    { val: '9',label:'需要保养 & 维护', isChecked: false },
    { val: '10',label:'需要检测 & 校准', isChecked: false },
    { val: '11',label:'其他报警（严重）', isChecked: false },
    { val: '12',label:'其他报警（一般）', isChecked: false },
    { val: '13',label:'其他报警（正常）', isChecked: false }
  ];
  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  alarmResponse(){
    this.nav.navigateForward("alarm-response");
  }

}
