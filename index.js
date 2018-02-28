"use strict";

module.exports = function coordinateDataImport(pointsFile) {
<<<<<<< HEAD
  
  var reader = new FileReader();
  var blob = new Blob(pointsFile, { type: "text/plain" });
  var result = [];

=======
  
  var reader = new FileReader();
  var blob = new Blob(pointsFile, { type: "text/plain" });
  
>>>>>>> beaae9b823c655a30b0957462a6dc8787f65752b
  reader.readAsText(blob);
  reader.onloadend = function(e) {
    var parsedBlob = reader.result;
    var lines = parsedBlob.toString().split(/\r?\n/);
<<<<<<< HEAD
    var linesMap = lines.map(function(line) {
      var coords = line.split(" ");
      return ({
        x: Number(coords[0]),
        y: Number(coords[1]),
        z: Number(coords[2]),
      });
    });
    result.push(...linesMap); 
  }
=======
    var result = lines.map(function(line) {
        var coords = line.split(" ");
        return ({
          x: Number(coords[0]),
          y: Number(coords[1]),
          z: Number(coords[2]),
        });
    });
>>>>>>> beaae9b823c655a30b0957462a6dc8787f65752b
  return result;
  }
}
