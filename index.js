"use strict";

module.exports = function coordinateDataImport(start, target) {
  const fs = require('fs');

  require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
  };

  const startStr = require(start);
  const targetStr = require(target);

  const startArr = startStr.replace(/(\r\n|\n|\r)/gm," ").split(" ");
  const targetArr = targetStr.replace(/(\r\n|\n|\r)/gm," ").split(" ");

  const startArrNums = startArr.map(Number);
  const targetArrNums = targetArr.map(Number);

  return ({
    start: startArrNums, 
    target: targetArrNums
  });
}