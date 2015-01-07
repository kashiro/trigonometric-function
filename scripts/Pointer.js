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
  }

  Pointer.prototype.bind = function(){
    this.$elm.addEventListener('mousedown', this.onMouseDown.bind(this), false);
    doc.addEventListener('mousemove', this.onMouseMove.bind(this), false);
    doc.addEventListener('mouseup', this.onMouseUp.bind(this), false);
  }

  Pointer.prototype.update = function(x, y){
    var $elm = this.$elm,
        offset = this.offset,
        positionFromCenter = this.getPositionFromCenter(x, y),
        suffix = this.suffix;

    if(x === 0){
      return;
    }
    this.callback({x:x,y:y}, positionFromCenter);
    $elm.style.left = x - offset + suffix;
    $elm.style.top = y - offset + suffix;
  };

  Pointer.prototype.onMouseDown = function(e){
    this.isTracking = true;
  };

  Pointer.prototype.onMouseUp = function(e){
    this.isTracking = false;
  };

  Pointer.prototype.onMouseMove = function(e){
    if(this.isTracking){
      this.update(e.clientX, e.clientY);
    }
    e.preventDefault();
  };

  Pointer.prototype.getPositionFromCenter = function(px, py){
    /*
     *           A
     *           *
     *          **
     *         ***
     *        ****
     *       *****
     *   B  ******  C
     *
     *   px,py are position of A
     *   this function calculate AC BC and AB size.
     */
    var center = this.center,
        ac = center.y - py,
        bc = px - center.x,
        ab = Trigonometric.getHypotenuse(ac, bc);
    return {
      r : ab, // radius
      x : bc,
      y : ac
    };
  };

  exports.Pointer = Pointer;

})(window, document);
