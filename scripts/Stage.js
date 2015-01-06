(function(exports){

  'use strict';

  function Stage(ctx, wWidth, wHeight, center){
    this.ctx = ctx;
    this.measureX = 50;
    this.measureY = 50;
    this.wWidth = wWidth;
    this.wHeight = wHeight;
    this.center = center;
  }

  Stage.prototype.draw = function(){
    this.drawArc();
    this.drawMeasure();
  };

  Stage.prototype.drawArc = function(){
    var ctx = this.ctx,
        center = this.center,
        radius = this.radius;

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#00FF00';
    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, 2*Math.PI, false);
    ctx.stroke();
  };

  Stage.prototype.drawMeasure = function(){
    var measureX = this.measureX,
        measureY = this.measureY,
        ctx = this.ctx,
        wWidth = this.wWidth,
        wHeight = this.wHeight,
        xCount = Math.ceil(wWidth/measureX),
        yCount = Math.ceil(wHeight/measureY),
        xOffset = Math.ceil(wWidth/2%measureX),
        yOffset = Math.ceil(wHeight/2%measureY),
        i = 0, x = 0, y = 0;

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

  Stage.prototype.update = function(radius){
    this.radius = radius;
  };

  exports.Stage = Stage;

})(window);
