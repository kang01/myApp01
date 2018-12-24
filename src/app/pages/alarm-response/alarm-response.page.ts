import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm-response',
  templateUrl: './alarm-response.page.html',
  styleUrls: ['./alarm-response.page.scss'],
})
export class AlarmResponsePage implements OnInit {

  public reason = [
    { val: '1',label:'信号传输受阻 & 信号干扰', isChecked: true },
    { val: '2',label:'监控设备故障', isChecked: false },
    { val: '3',label:'冻存设备故障', isChecked: false },
    { val: '4',label:'人员 & 物体误入库区', isChecked: false },
    { val: '5',label:'委托方进行样本操作', isChecked: false },
    { val: '6',label:'人员错误操作', isChecked: false },
    { val: '7',label:'其他原因', isChecked: false },
  ];
  public measures = [
    { val: '1',label:'未处理，30分钟内自愈 & 报警解除', isChecked: true },
    { val: '2',label:'停止样本操作，设备恢复正常', isChecked: false },
    { val: '3',label:'现场响应，设备恢复正常', isChecked: false },
    { val: '4',label:'其他措施', isChecked: false },
  ];
  constructor() { }

  ngOnInit() {
  }

}
