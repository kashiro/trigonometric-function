(function(exports){

  'use strict';

    /**
     *           A
     *           *
     *          **
     *         ***
     *        ****
     *       *****
     *   B  ******  C
     *
     */
  var Trigonometric = {

    /**
     * get dgree using tangent
     * @param {Number} tangent
     * @param {Boolean} convertdegree whether convert to dgree or not
     */
    tangent2radian : function(tangent, convertDegree){
      var radian = Math.atan(tangent);
      return convertDegree ? Trigonometric.radian2degree(radian) : radian;
    },

    degree2radian : function(degree){
      // 1 radian = 2(radius = 1, diameter = 1)π
      // 2π = 360° --> π = 180° --> π/180 = 1°
      return Math.PI / 180 * degree;
    },

    radian2degree : function(radian){
      // Math.PI / 180 * degree = radian
      // --> degree = radian * (180 / Math.PI)
      return  radian * (180 / Math.PI);
    },

    /**
     * get AB using AC and BC
     * @param {Number} ac lenght of ac
     * @param {Number} bc lenght of bc
     * @return {Number} ab lenght
     */
    getHypotenuse : function(ac, bc){
      // Pythagorean theorem
      // Math.pow(ab,2) = Math.pow(ac,2) + Math.pow(bc,2)
      return Math.sqrt(Math.pow(ac,2) + Math.pow(bc,2));
    },

    getArcPoint : function(radius, radian){
      // sinθ = y/x --> y = r * sinθ
      // cosθ = x/y --> x = r * cosθ
      return {
        x : radius * Math.cos(radian),
        y : radius * Math.sin(radian)
      }
    }

  };

  exports.Trigonometric = Trigonometric;

})(window);
