(function(exports){

  'use strict';

  function Arc(ctx, center){
    this.center = center;
    this.ctx = ctx;
    this.radius = 50;
  }

  Arc.prototype.update = function(positionFromCenter){
    var tangent = positionFromCenter.y / positionFromCenter.x;
    this.radian = Math.abs(Trigonometric.tangent2radian(tangent));
    this.degree = Math.abs(Trigonometric.radian2degree(this.radian));
    this.selectQuadrant(positionFromCenter.x, positionFromCenter.y);
    this.thetaFontPosition = this.getThetaFontPosition();
    this.targetRadian = this.getTargetRadian();
  };

  Arc.prototype.draw = function(){
    var ctx = this.ctx,
        center = this.center,
        targetRadian = this.targetRadian,
        thetaFontPosition = this.thetaFontPosition;

    // arc
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 1;
    ctx.beginPath();
    this.goCenter();
    ctx.arc(center.x, center.y, this.radius, targetRadian.start, targetRadian.end, false);
    ctx.closePath();
    ctx.stroke();

    // font
    ctx.fillStyle = 'blue';
    ctx.font = '20px sans-serif';
    ctx.fillText('θ', thetaFontPosition.x, thetaFontPosition.y);
  };

  Arc.prototype.getThetaFontPosition = function(){
    var x, y,
        quadrant = this.quadrant,
        center = this.center,
        offset = 10;

    if(quadrant === 1){
      x = center.x + offset;
      y = center.y - offset;
    }else if(quadrant === 2){
      x = center.x - offset * 3;
      y = center.y - offset;
    }else if(quadrant === 3){
      x = center.x - offset * 3;
      y = center.y + offset * 3;
    }else if(quadrant === 4){
      x = center.x + offset;
      y = center.y + offset * 3;
    }
    return {
      x : x,
      y : y
    };
  };


  Arc.prototype.getTargetRadian = function(){
    var start, end = '',
        radian = this.radian,
        halfRadian = Math.PI,
        quadrant = this.quadrant;

    if(quadrant === 1){
      start = - radian;
      end  =  0;
    }else if(quadrant === 4){
      start = 0;
      end  =  radian;
    }else if(quadrant === 3){
      start = halfRadian - radian;
      end  =  halfRadian;
    }else if(quadrant === 2){
      start = halfRadian;
      end  =  halfRadian + radian;
    }
    return {
      start : start,
      end   : end
    };
  };

  Arc.prototype.selectQuadrant = function(x, y){
    var quadrant;
    if(x > 0 && y > 0){
      // first quadrant
      this.quadrant = 1;
    }else if(x > 0 && y < 0){
      // fourth quadrant
      this.quadrant = 4;
    }else if(x < 0 && y < 0){
      // third quadrant
      this.quadrant = 3;
    }else if(x < 0 && y > 0){
      // second quadrant
      this.quadrant = 2;
    }

  };

  Arc.prototype.goCenter = function(){
    var ctx = this.ctx,
        center = this.center;
    ctx.moveTo(center.x, center.y);
  };

  exports.Arc = Arc;

})(window);
