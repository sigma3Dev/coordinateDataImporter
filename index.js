"use strict";

module.exports = {
  startCoordinateDataImport: function(pointsFile, callback) { 
    var reader = new FileReader();
    var blob = new Blob(pointsFile, { type: "text/plain" });

    reader.readAsText(blob);
    reader.onloadend = function(e) {
      var parsedBlob = reader.result;
      var lines = parsedBlob.toString().split(/\r?\n/);
      var lineMap = lines.map(function(line, index) {
        var coords = line.split(" ");
        var obj = {        
          x: Number(coords[0]),
          y: Number(coords[1]),
          z: Number(coords[2])
        };
        return (obj);
      });
      callback(lineMap);
    }
  },

  targetCoordinateDataImport: function(pointsFile, callback) { 
    var reader = new FileReader();
    var blob = new Blob(pointsFile, { type: "text/plain" });

    reader.readAsText(blob);
    reader.onloadend = function(e) {
      var parsedBlob = reader.result;
      var lines = parsedBlob.toString().split(/\r?\n/);
      var lineMap = lines.map(function(line, index) {
        var coords = line.split(" ");
        var obj = {        
          x: Number(coords[0]),
          y: Number(coords[1]),
          z: Number(coords[2])
        };
        obj.useX = true;
        obj.useY = true;
        obj.useZ = true;
        return (obj);
      });
      callback(lineMap);
    }
  }
}
