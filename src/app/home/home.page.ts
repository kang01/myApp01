import { Component,EventEmitter } from '@angular/core';
import { of, Observable } from 'rxjs';
interface Window {
    Image: any;
  }
  declare const window: Window;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
   
    public configStage: Observable<any> = of({
        width: 1024,
        height: 768
    });
    public configCircle: Observable<any> = of({
        x: 100,
        y: 100,
        radius: 70,
        fill: "red",
        stroke: "black",
        strokeWidth: 4,
        draggable: true,
    });
    // public configImage: Observable<any> = of({
    //     stroke: "black",
    //     strokeWidth: 4,
    //     x: 100,
    //     y: 200,
    //     width: 200,
    //     height: 137,
    //     draggable: true
    // });
    public configImage:EventEmitter<any> = new EventEmitter();
    public handleClick(component) {
        console.log("Hello Circle", component);
    }
    showImage(src:string){
        const image = new window.Image();
        image.src = src;
        image.onload = () => {
            this.configImage.emit({
              image: image,
            })
          }
    }
    ngOnInit(){
        this.showImage('/assets/images/biobank-f1.svg')
    }
    
}
