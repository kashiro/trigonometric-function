(function(exports, doc){

  'use strict';

  function Pointer(center, callback){
    this.center = center;
    this.$elm = doc.getElementById('pointer');
    this.offset = getComputedStyle(this.$elm)['width'].split('px')[0] / 2,
    this.suffix = 'px';
    this.isTracking = false;
    this.callback = callback;

    this.bind();
    this.update(center.x, center.y, this.offset);
  }

  Pointer.prototype.bind = function(){
    this.$elm.addEventListener('mousedown', this.onMouseDown.bind(this), false);
    doc.addEventListener('mousemove', this.onMouseMove.bind(this), false);
    doc.addEventListener('mouseup', this.onMouseUp.bind(this), false);
  }

  Pointer.prototype.update = function(x, y, offset){
    var $elm = this.$elm,
        _offset = offset || 0,
        suffix = this.suffix;

    if(x === 0){
      return;
    }
    $elm.style.left = x - _offset + suffix;
    $elm.style.top = y - _offset + suffix;
  };

  Pointer.prototype.onMouseDown = function(e){
    this.isTracking = true;
  };

  Pointer.prototype.onMouseUp = function(e){
    this.isTracking = false;
  };

  Pointer.prototype.onMouseMove = function(e){
    var positionFromCenter = {},
        clientPosition = {x:e.clientX, y:e.clientY};
    if(this.isTracking){
      positionFromCenter = this.getPositionFromCenter(e.clientX, e.clientY);
      this.update(e.clientX, e.clientY);
      this.callback(clientPosition, positionFromCenter);
    }
    e.preventDefault();
  };

  Pointer.prototype.getPositionFromCenter = function(px, py){
    var center = this.center;
    return {
      x : px - center.x,
      y : center.y - py
    };
  };

  exports.Pointer = Pointer;

})(window, document);
