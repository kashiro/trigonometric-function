(function(){

  'use strict';
  document.addEventListener('DOMContentLoaded', function(){


    var ctx = document.getElementById('canvas').getContext('2d'),
        wWidth = window.innerWidth,
        wHeight = window.innerHeight,
        center = {
          x : Math.ceil(wWidth / 2),
          y : Math.ceil(wHeight / 2)
        };

    ctx.canvas.width = wWidth;
    ctx.canvas.height = wHeight;


    var arc = new Arc(ctx, center),
        stage = new Stage(ctx, wWidth, wHeight, center),
        pointer = new Pointer(center, update.bind(this)),
        triangle = new Triangle(ctx, center);

    ///function updateAll(radius){
    ///  stage.init(ctx, wWidth, wHeight);
    ///  arc.update(radius, degree);
    ///  arc.draw();
    ///}
    update();
    function update(position, positionFromCenter){

      ctx.clearRect(0, 0, wWidth, wHeight);
      stage.update(200);
      stage.draw();

      if(position && positionFromCenter){
        triangle.update(position.x, position.y, positionFromCenter.y);
        triangle.draw();
      }

    }

  });

})();
