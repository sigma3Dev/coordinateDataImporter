'use strict';

module.exports = {
  startCoordinateDataImport: function startCoordinateDataImport(pointsFile, callback) {
    var reader = new FileReader();
    var blob = new Blob(pointsFile, { type: 'text/plain' });

    reader.readAsText(blob);
    reader.onloadend = function (e) {
      var parsedBlob = reader.result;
      var lines = parsedBlob.toString().split(/\r?\n/);
      var lineMap = lines.map(function (line, index) {
        var coords = line.replace(/\s\s+|\t/g, ' ').split(' ');
        var obj = {
          x: Number(coords[0]),
          y: Number(coords[1]),
          z: Number(coords[2])
        };
        if (!Number.isNaN(obj.x) && !Number.isNaN(obj.y) && !Number.isNaN(obj.z)) {
          return obj;
        }
      });
      callback(lineMap.filter(function (line) {
        return line !== undefined;
      }));
    };
  },
  targetCoordinateDataImport: function targetCoordinateDataImport(pointsFile, callback) {
    var reader = new FileReader();
    var blob = new Blob(pointsFile, { type: 'text/plain' });

    reader.readAsText(blob);
    reader.onloadend = function (e) {
      var parsedBlob = reader.result;
      var lines = parsedBlob.toString().split(/\r?\n/);
      var lineMap = lines.map(function (line, index) {
        var coords = line.replace(/\s\s+|\t/g, ' ').split(' ');
        var obj = {
          x: Number(coords[0]),
          y: Number(coords[1]),
          z: Number(coords[2]),
          useX: true,
          useY: true,
          useZ: true
        };
        if (!Number.isNaN(obj.x) && !Number.isNaN(obj.y) && !Number.isNaN(obj.z)) {
          return obj;
        }
      });
      callback(lineMap.filter(function (line) {
        return line !== undefined;
      }));
    };
  },
  bundleAdjustmentDataImport: function bundleAdjustmentDataImport(pointsFile, callback) {
    var reader = new FileReader();
    var blob = new Blob(pointsFile, { type: 'text/plain' });

    reader.readAsText(blob);
    reader.onloadend = function (e) {
      var parsedBlob = reader.result;
      var lines = parsedBlob.toString().split(/\r?\n/);
      var lineMap = lines.map(function (line, index) {
        var coords = line.replace(/\s\s+|\t/g, ' ').split(' ');
        var obj = {
          stationId: Number(coords[0]),
          geometryId: Number(coords[1]),
          x: Number(coords[2]),
          y: Number(coords[3]),
          z: Number(coords[4]),
          stdev: Number(coords[5])
        };
        if (!Number.isNaN(obj.stationId) && !Number.isNaN(obj.geometryId) && !Number.isNaN(obj.x) && !Number.isNaN(obj.y) && !Number.isNaN(obj.z) && !Number.isNaN(obj.stdev)) {
          return obj;
        }
      });
      callback(lineMap.filter(function (line) {
        return line !== undefined;
      }));
    };
  }
};