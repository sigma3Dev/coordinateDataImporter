"use strict";

module.exports = function coordinateDataImport(start, target) {
  const fs = require('fs');
  // const WebSocket = require('ws');
  // const socket = new WebSocket('ws://localhost:8091');

  require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
  };

  const startStr = require(`./${start}.txt`);
  const targetStr = require(`./${target}.txt`);

  const startArr = startStr.replace(/(\r\n|\n|\r)/gm," ").split(" ");
  const targetArr = targetStr.replace(/(\r\n|\n|\r)/gm," ").split(" ");

  // let requestObject = {
  //   "jsonrpc": "2.0",
  //   "method": "transformation3D7",
  //   "params": {
  //     "startPoints": [{
  //       "id": 1,
  //       "x": Number(startStr[0]),
  //       "y": Number(startStr[1]),
  //       "z": Number(startStr[2]),
  //       "stdev": 0.1
  //     }, {
  //       "id": 2,
  //       "x": Number(startStr[3]),
  //       "y": Number(startStr[4]),
  //       "z": Number(startStr[5]),
  //       "stdev": 0.1
  //     }, {
  //       "id": 3,
  //       "x": Number(startStr[6]),
  //       "y": Number(startStr[7]),
  //       "z": Number(startStr[8]),
  //       "stdev": 0.1
  //     }], 
  //     "targetPoints": [{
  //       "id": 1,
  //       "x": Number(targetStr[0]),
  //       "y": Number(targetStr[1]),
  //       "z": Number(targetStr[2]),
  //       "stdev": 0.1
  //     }, {
  //       "id": 2,
  //       "x": Number(targetStr[3]),
  //       "y": Number(targetStr[4]),
  //       "z": Number(targetStr[5]),
  //       "stdev": 0.1
  //     }, {
  //       "id": 3,
  //       "x": Number(targetStr[6]),
  //       "y": Number(targetStr[7]),
  //       "z": Number(targetStr[8]),
  //       "stdev": 0.1
  //     }]
  //   },
  //   "id": 1
  // };

  // socket.onopen = function (e) {
  //   socket.send(JSON.stringify(requestObject));
  // }

  // socket.onmessage = function(e) {
  //   const responseObject = e.data;
  //   console.log(String(responseObject));
  // }

  return ({
    start: startArr, 
    target: targetArr
  });
}