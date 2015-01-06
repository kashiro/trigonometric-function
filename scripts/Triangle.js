(function(exports){

  'use strict';

  function Triangle(ctx, center){
    this.ctx = ctx;
    this.center = center;
  }

  Triangle.prototype.update = function(x, y, length){
    this.x = x;
    this.y = y;
    this.length = length;
  };

  Triangle.prototype.draw = function(){
    var ctx = this.ctx,
        center = this.center;

    ctx.lineWidth = 1;
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.length);
    ctx.lineTo(center.x, center.y);
    ctx.closePath();
    ctx.stroke();
  };

  exports.Triangle = Triangle;

})(window);
