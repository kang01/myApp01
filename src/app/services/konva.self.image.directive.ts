import { Directive, HostListener, HostBinding } from '@angular/core';
declare const Konva: any;
@Directive({
  selector: '[greet]'

})
export class KonvaImageDirective {
  
  constructor() { }
  // @HostListener('click')
  // onClick(){
  //   console.log('I am clicked!');
  // }
  // 实现元素的属性绑定
  @HostBinding() innerText = 'Hello, Everyone!';
  ngOnInit(){
    var imageObj = new Image();
    imageObj.onload = function() {
      var image = new Konva.Image({
        x: 200,
        y: 50,
        image: imageObj,
        width: 100,
        height: 100
      });
    };
    imageObj.src = '/path/to/image.jpg'
  }
  

}
