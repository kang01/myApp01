import { Component,EventEmitter, ViewChild } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { KonvaComponent } from 'ng2-konva';

declare const Konva: any;
declare const gifler: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
    stage;
    blobs = [];
    f1Data = [
        {name:'冰箱',x:10,y:347,width:40,height:63,url:'/assets/images/1122.gif'},
        {name:'冰箱',x:-20,y:364,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},

        {name:'冰箱',x:217,y:535,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冰箱',x:247,y:552,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},

        // L1-top
        {name:'冰箱',x:127,y:279,width:40,height:63,url:'/assets/images/1122.gif'},
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
        {name:'冰箱',x:393,y:435,width:40,height:63,url:'/assets/images/冰箱2.5D.png'},
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

        // L1-冻存罐 top
        {name:'冻存罐',x:269,y:206,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:313,y:231,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:358,y:256,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:401,y:282,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        // L1-冻存罐 bottom
        {name:'冻存罐',x:225,y:230,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:270,y:255,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:315,y:281,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:359,y:306,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},

        // // R1-冻存罐 top
        {name:'冻存罐',x:534,y:360,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:578,y:385,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:623,y:410,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:661,y:436,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        // R1-冻存罐 bottom
        {name:'冻存罐',x:490,y:384,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:535,y:409,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:580,y:435,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:624,y:460,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
       
        // Lb-冻存罐 top
        {name:'冻存罐',x:357,y:153,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:402,y:179,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:446,y:204,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        // Rb-冻存罐 bottom
        {name:'冻存罐',x:578,y:281,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:623,y:307,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:667,y:332,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:712,y:357,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
        {name:'冻存罐',x:756,y:383,width:51,height:63,url:'/assets/images/冰箱2.5D.png'},
    ];
    canvas = document.createElement('canvas');
    // canvas.width = 50;
    onDrawFrame(ctx,frame,group) {
        // var ctx=this.canvas.getContext('2d');
        // update canvas size
        // this.canvas.width = 50;
        // this.canvas.height = 60;
        // update canvas that we are using for Konva.Image
        ctx.drawImage(frame.buffer, 0, 0);
        // redraw the layer
        group.draw();
    }
    addFreezerImage(group,data){
        // var randX = Math.random() * this.stage.getWidth();
        // var randY = Math.random() * this.stage.getHeight();    
        var freezerImg = new Konva.Image({
            x: data.x,
            y: data.y,
            width: data.width,
            height: data.height,
        }); 
        if(data.flag === '1'){
            new gifler('/assets/images/1122.gif')
            .frames(this.canvas,this.onDrawFrame);
            var image2 = new Konva.Image({
                image: this.canvas
            });
            // freezerImg.image(image2);
            // group.add(freezerImg);
            group.add(image2);
        }else{
            var imageObj2 = new Image();
            imageObj2.onload = function() {
                freezerImg.image(imageObj2);
            };
            imageObj2.src = data.url;
            group.add(freezerImg);
            this.blobs.push(freezerImg);
        }
       
        
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
           
        });
            for(var n = 0; n < this.f1Data.length; n++) {
                // this.addFreezerImage(layer);
                this.addFreezerImage(group,this.f1Data[n])
            }
        layer.add(group);
        this.stage.add(layer);

        group.on('mouseover', function(evt) {
            var shape = evt.target;
            console.log(shape);
            document.body.style.cursor = 'pointer';
            shape.scaleX(1.2);
            shape.scaleY(1.2);
            layer.draw();
        });
        group.on('mouseout', function(evt) {
            var shape = evt.target;
            document.body.style.cursor = 'default';
            shape.scaleX(1);
            shape.scaleY(1);
            layer.draw();
        });
        var period = 2000;
        var centerTension = 0;
        var amplitude = 1;

        var anim = new Konva.Animation(function(frame) {
            for(var n = 0; n < this.blobs.length; n++) {
                this.blobs[n].scaleX(1.2);;
                this.blobs[n].scaleY(1.2);;
            }
        }, layer);

        anim.start();


        var scaleBy = 1.1;
        window.addEventListener('wheel', (e) => {
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
