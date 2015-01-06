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
        triangle = new Triangle(ctx, center),
        pointer = new Pointer(center, update.bind(this));

    ///function updateAll(radius){
    ///  stage.init(ctx, wWidth, wHeight);
    ///  arc.update(radius, degree);
    ///  arc.draw();
    ///}

    pointer.update(center.x+200, center.y-200);

    function update(position, positionFromCenter){

      ctx.clearRect(0, 0, wWidth, wHeight);

      stage.update(positionFromCenter.r);
      stage.draw();

      triangle.update(position.x, position.y, positionFromCenter.y);
      triangle.draw();

    }

  });

})();
