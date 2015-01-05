(function(exports){

  'use strict';

  function Pointer(){
    this.$elm = document.getElementById('pointer');
    this.offset = getComputedStyle(this.$elm)['width'].split('px')[0] / 2,
    this.suffix = 'px';

    this.bind();
    this.update(window.innerWidth/2, window.innerHeight/2, this.offset);
  }

  Pointer.prototype.bind = function(){
    this.$elm.addEventListener('drag', this.onDrag.bind(this), false);
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

  Pointer.prototype.onDrag = function(e){
    this.update(e.clientX, e.clientY);
    e.preventDefault();
  };

  exports.Pointer = Pointer;

})(window);
