"use strict";

module.exports = function coordinateDataImport(pointsFile, callback) { 
  var reader = new FileReader();
  var blob = new Blob(pointsFile, { type: "text/plain" });

  reader.readAsText(blob);
  reader.onloadend = function(e) {
    var parsedBlob = reader.result;
    var lines = parsedBlob.toString().split(/\r?\n/);
    var lineMap = lines.map(function(line, index) {
      var coords = line.split(" ");
      var xId = 'x' + index;
      var yId = 'y' + index;
      var zId = 'z' + index;
      return ({
        x: Number(coords[0]),
        y: Number(coords[1]),
        z: Number(coords[2]),
        xId: true,
        yId: true,
        zId: true
        
      });
    });
    callback(lineMap);
  }
}
