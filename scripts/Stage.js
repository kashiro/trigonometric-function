(function(exports){

  'use strict';

  function Stage(){
  }

  Stage.prototype.init = function(ctx, wWidth, wHeight){
    var measureX = 50,
        measureY = 50,
        xCount = Math.ceil(wWidth/measureX),
        yCount = Math.ceil(wHeight/measureY),
        xOffset = Math.ceil(wWidth/2%measureX),
        yOffset = Math.ceil(wHeight/2%measureY),
        i = 0, x = 0, y = 0;

    ctx.clearRect(0, 0, wWidth, wHeight);
    ctx.lineWidth = 1;

    ctx.strokeStyle = '#D8D8D8';
    for(; i <= xCount; i++){
      ctx.beginPath();
      x = i * measureX + xOffset;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, wHeight);
      ctx.closePath();
      ctx.stroke();
    }
    i = 0;
    for(; i <= yCount; i++){
      ctx.beginPath();
      y = i * measureY + yOffset
      ctx.moveTo(0, y);
      ctx.lineTo(wWidth, y);
      ctx.closePath();
      ctx.stroke();
    }
  };

  exports.Stage = Stage;

})(window);
