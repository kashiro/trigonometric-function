(function(exports){

  'use strict';

  function Stage(ctx, wWidth, wHeight, center){
    this.ctx = ctx;
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
    var ctx = this.ctx,
        wWidth = this.wWidth,
        wHeight = this.wHeight,
        center = this.center;

    ctx.strokeStyle = '#D8D8D8';
    ctx.lineWidth = 1;
    // coulumn
    ctx.beginPath();
    ctx.moveTo(center.x, 0);
    ctx.lineTo(center.x, wHeight);
    ctx.closePath();
    ctx.stroke();
    // row
    ctx.beginPath();
    ctx.moveTo(0, center.y);
    ctx.lineTo(wWidth, center.y);
    ctx.closePath();
    ctx.stroke();
  };

  Stage.prototype.update = function(radius){
    this.radius = radius;
  };

  exports.Stage = Stage;

})(window);
