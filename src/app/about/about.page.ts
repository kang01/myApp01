import { Component } from '@angular/core';
import { Observable, of ,BehaviorSubject} from 'rxjs';
import { KonvaComponent } from 'ng2-konva';
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


    public width = 800;
    public height = 200;
    public list: Array<any> = [];
  
    public configStage1: Observable<any> = of({
      width: this.width,
      height: this.height
    });
  
    // public handleDragstart(ngComponent: KonvaComponent) {
    //   const shape = ngComponent.getStage();
    //   const dragLayer = ng.dragLayer.getStage();
    //   const stage = ng.stage.getStage();
    //   console.log("handleDragstart");
    //   // moving to another layer will improve dragging performance
    //   shape.moveTo(dragLayer);
    //   stage.draw();
  
    //   ngComponent.config.next({
    //     shadowOffsetX: 15,
    //     shadowOffsetY: 15,
    //     scaleX: ngComponent.getConfig().startScale * 1.2,
    //     scaleY: ngComponent.getConfig().startScale * 1.2,
    //   });
    // }
  
    // public handleDragend(ngComponent: KonvaComponent) {
    //   const shape = ngComponent.getStage();
    //   const layer = ng.layer.getStage();
    //   const stage = ng.stage1.getStage();
    //   console.log("handleDragend");
    //   shape.moveTo(layer);
    //   stage.draw();
  
    //   shape.to({
    //     duration: 0.5,
    //     easing: Konva.Easings.ElasticEaseOut,
    //     scaleX: ngComponent.getConfig().startScale,
    //     scaleY: ngComponent.getConfig().startScale,
    //     shadowOffsetX: 5,
    //     shadowOffsetY: 5
    //   });
    // }
  
    public ngOnInit() {
      ng = this;
      for (let n = 0; n < 10; n++) {
        const scale = Math.random();
        this.list.push(
          new BehaviorSubject({
            x: Math.random() * 800,
            y: Math.random() * 200,
            rotation: Math.random() * 180,
            numPoints: 5,
            innerRadius: 30,
            outerRadius: 50,
            fill: '#89b717',
            opacity: 0.8,
            draggable: true,
            scaleX: scale,
            scaleY: scale,
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffsetX: 5,
            shadowOffsetY: 5,
            shadowOpacity: 0.6,
            startScale: scale
          })
        );
      }
    }

  }
