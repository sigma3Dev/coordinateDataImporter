"use strict";

module.exports = function coordinateDataImport(pointsFile) {

  var fs = require('fs');
  
  var lines = fs.readFileSync(pointsFile).toString().split(/\r?\n/);
  
  var result = lines.map(function(line) {
    var coords = line.split(" ");
    return ({
      x: Number(coords[0]),
      y: Number(coords[1]),
      z: Number(coords[2]),
    });
  })

  return result;
}