module.exports = {
  startCoordinateDataImport(pointsFile, callback) {
    const reader = new FileReader();
    const blob = new Blob(pointsFile, { type: 'text/plain' });

    reader.readAsText(blob);
    reader.onloadend = function (e) {
      const parsedBlob = reader.result;
      const lines = parsedBlob.toString().split(/\r?\n/);
      const lineMap = lines.map((line, index) => {
        const coords = line.replace(/\s\s+|\t/g, ' ').split(' ');
        const obj = {
          x: Number(coords[0]),
          y: Number(coords[1]),
          z: Number(coords[2]),
        };
        if (!Number.isNaN(obj.x) && !Number.isNaN(obj.y) && !Number.isNaN(obj.z)) {
          return obj;
        }
      });
      callback(lineMap.filter(line => line !== undefined));
    };
  },

  targetCoordinateDataImport(pointsFile, callback) {
    const reader = new FileReader();
    const blob = new Blob(pointsFile, { type: 'text/plain' });

    reader.readAsText(blob);
    reader.onloadend = function (e) {
      const parsedBlob = reader.result;
      const lines = parsedBlob.toString().split(/\r?\n/);
      const lineMap = lines.map((line, index) => {
        const coords = line.replace(/\s\s+|\t/g, ' ').split(' ');
        const obj = {
          x: Number(coords[0]),
          y: Number(coords[1]),
          z: Number(coords[2]),
          useX: true,
          useY: true,
          useZ: true,
        };
        if (!Number.isNaN(obj.x) && !Number.isNaN(obj.y) && !Number.isNaN(obj.z)) {
          return obj;
        }
      });
      callback(lineMap.filter(line => line !== undefined));
    };
  },

  bundleAdjustmentDataImport(pointsFile, callback) {
    const reader = new FileReader();
    const blob = new Blob(pointsFile, { type: 'text/plain' });

    reader.readAsText(blob);
    reader.onloadend = function (e) {
      const parsedBlob = reader.result;
      const lines = parsedBlob.toString().split(/\r?\n/);
      const lineMap = lines.map((line, index) => {
        const coords = line.replace(/\s\s+|\t/g, ' ').split(' ');
        const obj = {
          stationId: Number(coords[0]),
          geometryId: Number(coords[1]),
          x: Number(coords[2]),
          y: Number(coords[3]),
          z: Number(coords[4]),
          stdev: Number(coords[5]),
        };
        if (!Number.isNaN(obj.stationId) && !Number.isNaN(obj.geometryId) && !Number.isNaN(obj.x) && !Number.isNaN(obj.y) && !Number.isNaN(obj.z) && !Number.isNaN(obj.stdev)) {
          return obj;
        }
      });
      callback(lineMap.filter(line => line !== undefined));
    };
  },
};
