"use strict";

module.exports = function coordinateDataImport(pointsFile) {
  
  var reader = new FileReader();
  var blob = new Blob(pointsFile, { type: "text/plain" });
  
  reader.readAsText(blob);
  reader.onloadend = function(e) {
    var parsedBlob = reader.result;
    var lines = parsedBlob.toString().split(/\r?\n/);
    var result = lines.map(function(line) {
        var coords = line.split(" ");
        return ({
          x: Number(coords[0]),
          y: Number(coords[1]),
          z: Number(coords[2]),
        });
    });
  return result;
  }
}