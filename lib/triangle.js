
'use strict'

var nuevo = require("@alu0100785265/ull-shape-lucas");
var Shape = nuevo.Shape;
class Triangle extends Shape {
    constructor(options) {
      super(options)
    }
    area() {
      return 0.5 * this.width * this.height;
    }
}
Shape.Shapes.Triangle = Triangle;
module.exports = Triangle;


