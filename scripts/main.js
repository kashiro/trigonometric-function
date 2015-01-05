(function(){

  'use strict';
  document.addEventListener('DOMContentLoaded', function(){


    var ctx = document.getElementById('canvas').getContext('2d'),
        wWidth = window.innerWidth,
        wHeight = window.innerHeight;

    ctx.canvas.width = wWidth;
    ctx.canvas.height = wHeight;


    var arc = new Arc(ctx),
        stage = new Stage(),
        pointer = new Pointer();

    ///function updateAll(){
    ///  stage.init(ctx, wWidth, wHeight);
    ///  arc.update(radius, degree);
    ///  arc.draw();
    ///}
    stage.init(ctx, wWidth, wHeight);
    arc.update(200, 90);
    arc.draw();

  });

})();
