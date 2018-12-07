import { Component } from '@angular/core';
declare const Konva: any;
@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {

  ngOnInit(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    function addNode(obj, layer) {
      var node = new Konva.Circle({
          x: obj.x,
          y: obj.y,
          radius: 4,
          fill: obj.color,
          id: obj.id
      });

      layer.add(node);
  }
  var stage = new Konva.Stage({
      container: 'container',
      width: width,
      height: height,
      draggable: true
  });

  var tooltipLayer = new Konva.Layer();
  var dragLayer = new Konva.Layer();

  var tooltip = new Konva.Label({
      opacity: 0.75,
      visible: false,
      listening: false
  });

  tooltip.add(new Konva.Tag({
      fill: 'black',
      pointerDirection: 'down',
      pointerWidth: 10,
      pointerHeight: 10,
      lineJoin: 'round',
      shadowColor: 'black',
      shadowBlur: 10,
      shadowOffset: 10,
      shadowOpacity: 0.2
  }));

  tooltip.add(new Konva.Text({
      text: '',
      fontFamily: 'Calibri',
      fontSize: 18,
      padding: 5,
      fill: 'white'
  }));

  tooltipLayer.add(tooltip);

  // build data
  var data = [];

  var colors = ['red', 'orange', 'cyan', 'green', 'blue', 'purple'];
  for(var n = 0; n < 20000; n++) {
      var x = Math.random() * width;
      var y = height + (Math.random() * 200) - 100 + (height / width) * -1 * x;
      data.push({
          x: x,
          y: y,
          id: n,
          color: colors[Math.round(Math.random() * 5)]
      });
  }

  // render data
  var nodeCount = 0;
  var layer = new Konva.Layer();
  for(var n = 0; n < data.length; n++) {
      addNode(data[n], layer);
      nodeCount++;
      if(nodeCount >= 1000) {
          nodeCount = 0;
          stage.add(layer);
          layer = new Konva.Layer();
      }
  }

  stage.add(dragLayer);
  stage.add(tooltipLayer);

  stage.on('mouseover mousemove dragmove', function(evt) {
      var node = evt.target;
      if (node) {
          // update tooltip
          var mousePos = node.getStage().getPointerPosition();
          tooltip.position({
              x : mousePos.x,
              y : mousePos.y - 5
          });
          tooltip.getText().setText("node: " + node.getId() + ", color: " + node.getFill());
          tooltip.show();
          tooltipLayer.batchDraw();
      }
  });

  stage.on('mouseout', function(evt) {
      tooltip.hide();
      tooltipLayer.draw();
  });

  var startLayer;

  stage.on('mousedown', function(evt) {
      var shape = evt.target;
      if (shape) {
          startLayer = shape.getLayer();
          shape.moveTo(dragLayer);
          startLayer.draw();
          // manually trigger drag and drop
          shape.startDrag();
      }
  });

  stage.on('mouseup', function(evt) {
      var shape = evt.target;
      if (shape) {
          shape.moveTo(startLayer);
          dragLayer.draw();
          startLayer.draw();
      }
  });
  }

  

}
