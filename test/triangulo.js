"use strict"
var nuevo = require("@alu0100785265/ull-shape-lucas");

let Triangle = require("../lib/triangle");
var should = require('should');



describe("getArea", function() {
  it("must compute the triangle area correctly. Shape object", function() {
    let a = new Triangle({ width: 100, height: 100 });
    let s = a.getArea();
    s.should.match(/^5000$/);
  })
   
   
});
      