"use strict"

var Tri = require('../triangle.js')
var Shape = require("@alu0100785265/ull-shape-lucas")
var Triangle = Tri.Triangle
var should = require('should');



describe("getArea", function() {
  it("must compute the triangle area correctly. Shape object", function() {
    let a = new Shape({ width: 100, height: 50 }, 'Triangle');
    let s = a.getArea();
    s.should.match(/^5000$/);
  })
   
   
});
      