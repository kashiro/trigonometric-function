(function(exports){

  'use strict';

  function Arc(ctx, center){
    this.center = center;
    this.ctx = ctx;
  }

  Arc.prototype.degree2radian = function(degree){
    // 1 radian = 2(radius = 1, diameter = 1)π
    // 2π = 360° -> π = 180° -> π/180 = 1°
    return Math.PI / 180 * degree;
  };

  Arc.prototype.radian2degree = function(radian){
    // Math.PI / 180 * degree = radian
    // --> degree = radian * (Math.PI / 180)
    return  radian * (Math.PI / 180);
  };

  Arc.prototype.getX = function(radius, radian){
    return radius * Math.cos(radian);
  };

  Arc.prototype.getY = function(radius, radian){
    return radius * Math.sin(radian);
  };

  Arc.prototype.update = function(radius, degree){
    this.radian = this.degree2radian(degree);
    this.radius = radius;
  };

  Arc.prototype.draw = function(){
    var ctx = this.ctx,
        center = this.center;

    this.ctx.strokeStyle = '#00FF00';
    ctx.lineWidth = 3;
    ctx.beginPath();
    this.goCenter();
    ctx.arc(center.x, center.y, this.radius, 0, this.radian, false);
    ctx.closePath();
    ctx.stroke();
  };

  Arc.prototype.goCenter = function(){
    var ctx = this.ctx,
        center = this.center;
    ctx.moveTo(center.x, center.y);
  };

  exports.Arc = Arc;

})(window);
