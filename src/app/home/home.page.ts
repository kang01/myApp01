import { Component,EventEmitter, ViewChild } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { KonvaComponent } from 'ng2-konva';

declare const Konva: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
    stage;
    f1Data = [
        {name:'冰箱',x:10,y:347,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:-20,y:364,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        // L1-top
        {name:'冰箱',x:127,y:279,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:157,y:296,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:186,y:313,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:216,y:331,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:246,y:347,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},

        // L1-bottom
        {name:'冰箱',x:97,y:296,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:127,y:313,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:156,y:331,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:186,y:347,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:216,y:364,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        // R1-top
        {name:'冰箱',x:493,y:383,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:423,y:450,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:453,y:467,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:482,y:484,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:512,y:501,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:542,y:518,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},

        // R1-bottom
        {name:'冰箱',x:363,y:450,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:393,y:467,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:423,y:484,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:452,y:501,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:482,y:518,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:512,y:535,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
    ]
    addFreezerImage(group,data){
        // var randX = Math.random() * this.stage.getWidth();
        // var randY = Math.random() * this.stage.getHeight();    
        var freezerImg = new Konva.Image({
            x: data.x,
            y: data.y,
            width: data.width,
            height: data.height,
            draggable: true
        }); 
        var imageObj2 = new Image();
        imageObj2.onload = function() {
            freezerImg.image(imageObj2);
            // layer1.draw();
        };
        imageObj2.src = data.url;
        group.add(freezerImg);
    }
    ngOnInit(){
        var width = window.innerWidth;
        var height = window.innerHeight;
        this.stage = new Konva.Stage({
            container: 'container',
            width: width,
            height: height,
            draggable: true
            
        });
        var layer = new Konva.Layer();
       
        var backgroundImg = new Konva.Image({
            x: -116,
            y: 135,
            width: 1000, //1024*610
            height:596,
        });
        layer.add(backgroundImg);
        var imageObj1 = new Image();
        imageObj1.onload = function() {
            backgroundImg.image(imageObj1);
            layer.draw();
        };
        imageObj1.src = '/assets/images/biobank-f1.svg';
        var group = new Konva.Group({
            draggable: true
        });
            for(var n = 0; n < this.f1Data.length; n++) {
                // this.addFreezerImage(layer);
                this.addFreezerImage(group,this.f1Data[n])
            }
        layer.add(group);
        this.stage.add(layer);



        var scaleBy = 1.1;
        window.addEventListener('wheel', (e) => {
            console.log("aaaa")
            e.preventDefault();
            var oldScale = this.stage.scaleX();
            var mousePointTo = {
                x: this.stage.getPointerPosition().x / oldScale - this.stage.x() / oldScale,
                y: this.stage.getPointerPosition().y / oldScale - this.stage.y() / oldScale,
            };
            var newScale = e.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
            this.stage.scale({ x: newScale, y: newScale });
            var newPos = {
                x: -(mousePointTo.x - this.stage.getPointerPosition().x / newScale) * newScale,
                y: -(mousePointTo.y - this.stage.getPointerPosition().y / newScale) * newScale
            };
            this.stage.position(newPos);
            this.stage.batchDraw();
        });
        
    }
    
}
