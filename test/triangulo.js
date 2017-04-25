"use strict"


var should = require('should');
let Triangle = require("../lib/triangle");


describe("getArea", function() {
  it("must compute the triangle area correctly. Shape object", function() {
    let a = new Triangle({ width: 100, height: 100 });
    let s = a.getArea();
    s.should.match(/^5000$/);
  })
   
   
});
      